import "@testing-library/jest-dom";
import {configureLogger} from "../src/server/logging/LoggerBase";
configureLogger({stdout: false});
