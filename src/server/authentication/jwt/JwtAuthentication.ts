import {Authentication} from "../Authentication";
import {Application, Request, Response} from "express";
import jwt from "jsonwebtoken";
import {Log} from "../../logging/LoggerBase";
import {DataStore} from "../../datastore/DataStore";

const JWT_COOKIE_NAME = "jwt";

@Log
export class JwtAuthentication extends Authentication {
  public initAuth(app: Application, dataStore: DataStore): Promise<void> {
    return Promise.resolve(undefined);
  }

  protected signup(req: Request, res: Response, next) {
    this.saveJwtToken(req, res, next);
  }

  protected async login(req: Request, res: Response, next) {
    this.saveJwtToken(req, res, next);
  }

  protected logout(req: Request, res: Response, next) {
    res.clearCookie(JWT_COOKIE_NAME);
    next();
  }

  private saveJwtToken(req: Request, res: Response, next) {
    jwt.sign((req as any).user.id || (req as any).user._id, this.config.sessionSecret, {}, (err, token) => {
      if (err) {
        this.logger.error(err);
        this.unauthorisedResponse(res);
      } else {
        res.cookie(JWT_COOKIE_NAME, token, {
          expires: new Date(Date.now() + 1000 * 60 * 60 * 5),
          domain: "localhost",
        });
        next();
      }
    });
  }

  protected parseUser(req: Request, res: Response, next) {
    if (!req.cookies?.[JWT_COOKIE_NAME]) {
      res.status(401)
      res.send("{}");
    } else {
      jwt.verify(req.cookies?.[JWT_COOKIE_NAME] || "", this.config.sessionSecret, async (err, userId) => {
        if (err) {
          this.logger.error(err);
          this.unauthorisedResponse(res);
        } else {
          (req as any).user = await this.userAuthentication.getUser(userId);
          next();
        }
      });
    }
  }
}
