import { createLogger, format, transports, Logger } from "winston";
import config from "config";
import {getClassName} from "../../utils/getClassName";

const { combine, label, printf, timestamp } = format;
const TimestampLabelFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${level.toUpperCase()}] ${label}: ${message}`;
});

export class LoggerBase {
  protected readonly logger: Logger;
}

export function Log(constructor: any) {
  const className = getClassName(constructor);
  (constructor.prototype as any).logger = createLogger({
    level: config.get("log.level"),
    transports: [new transports.Console()],
    format: combine(
      label({ label: className }),
      timestamp(),
      TimestampLabelFormat,
    ),
  });
}
