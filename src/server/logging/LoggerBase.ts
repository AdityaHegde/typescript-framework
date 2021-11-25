import { createLogger, format, transports, Logger } from "winston";
import config from "config";
import {getClassName} from "../../utils/getClassName";

const { combine, label, printf, timestamp } = format;
const TimestampLabelFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${level.toUpperCase()}] ${label}: ${message}`;
});

const LoggerConfig: {
  stdout?: boolean,
} = {
  stdout: true,
};

export class LoggerBase {
  protected readonly logger: Logger;
}

export function Log(constructor: any) {
  const className = getClassName(constructor);
  (constructor.prototype as any).logger = createLogger({
    level: config.get("log.level"),
    transports: [
      new transports.Console({silent: !LoggerConfig.stdout}),
    ],
    format: combine(
      label({ label: className }),
      timestamp(),
      TimestampLabelFormat,
    ),
  });
}

export function configureLogger(loggerConfig: typeof LoggerConfig) {
  for (const c in loggerConfig) {
    if (Object.prototype.hasOwnProperty.call(loggerConfig, c)) {
      LoggerConfig[c] = loggerConfig[c];
    }
  }
}
