const isDevEnv = true;

const log = (...args) =>  (isDevEnv) && console.log(...args);

const error = (...args) =>  (isDevEnv) && console.error(...args);

const debug = (...args) =>  (isDevEnv) && console.debug(...args);

const warn = (...args) =>  (isDevEnv) && console.warn(...args);

export default {
    log,
    error,
    debug,
    warn
}