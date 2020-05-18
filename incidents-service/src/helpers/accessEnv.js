// accesses a variable inside of process.env
// always run this method in advance so that the error is thrown as early
// as possible caching the values improves performance

const cache = {};

const accessEnv = (key, defaultValue) => {
  if (cache[key]) return cache[key];

  if (!(key in process.env)) {
    if (defaultValue) return defaultValue;
    throw new Error(`${key} not found in process.env!`);
  }

  cache[key] = process.env[key];

  return process.env[key];
};

export default accessEnv;
