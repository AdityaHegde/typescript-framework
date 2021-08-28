import {Authentication} from "../Authentication";
import {Application, Request, Response} from "express";
import session from "express-session";
import {Log} from "../../logging/LoggerBase";
import {DataStore} from "../../datastore/DataStore";

const SESSION_COOKIE = "sid";

@Log
export class SessionAuthentication extends Authentication {
  public async initAuth(app: Application, dataStore: DataStore): Promise<void> {
    app.use(session({
      key: SESSION_COOKIE,
      secret: this.config.sessionSecret,
      resave : true,
      saveUninitialized : false,
      cookie : {
        maxAge: 1000 * 60 * 60 * 5,
        domain: "localhost",
      },
      store: dataStore.getSessionStore(),
    }));
  }

  protected signup(req: Request, res: Response, next) {
    this.saveSession(req, res, next);
  }

  protected login(req: Request, res: Response, next) {
    this.saveSession(req, res, next);
  }

  protected logout(req: Request, res: Response, next) {
    if (!(req as any).session.userId) {
      return;
    }
    (req as any).session.destroy(err => {
      if (err) throw (err);
      next();
    });
  }

  protected async parseUser(req: Request, res: Response, next) {
    if ((req as any).session.userId) {
      (req as any).user = await this.userAuthentication.getUser((req as any).session.userId);
      next();
    } else {
      this.unauthorisedResponse(res);
    }
  }

  private saveSession(req: Request, res: Response, next) {
    (req as any).session.userId = (req as any).user.id;
    next();
  }
}
