import dotenv from "dotenv";

/**
 * Retrieves a mandatory environment variable as a string.
 * Throws an error if the environment variable is not set.
 *
 * @param name - The name of the environment variable.
 * @returns The value of the environment variable as a trimmed string.
 * @throws Error if the environment variable is not set.
 */
export function getMandatoryEnvString(name: string): string {
  dotenv.config();
  const v: string | undefined = process.env[name];
  if (v !== undefined && v !== null) {
    return v.trim();
  } else {
    throw Error("Mandatory environment variable " + name + " is missing");
  }
}

/**
 * Retrieves an optional environment variable as a string.
 * Returns a default value if the environment variable is not set.
 *
 * @param name - The name of the environment variable.
 * @param defaultValue - The default value to return if the environment variable is not set.
 * @returns The value of the environment variable as a trimmed string, or the default value.
 */
export function getOptionalEnvString(name: string, defaultValue: string): string {
  dotenv.config();
  const v: string | undefined = process.env[name];
  if (v !== undefined && v !== null) {
    return v.trim();
  } else {
    return defaultValue;
  }
}

/**
 * Retrieves a mandatory environment variable as an integer.
 * Throws an error if the environment variable is not set or is not a valid integer.
 *
 * @param name - The name of the environment variable.
 * @returns The value of the environment variable as an integer.
 * @throws Error if the environment variable is not set or is not a valid integer.
 */
export function getMandatoryEnvInt(name: string): number {
  const v: number = parseInt(getMandatoryEnvString(name));
  if (isNaN(v)) {
    throw Error("Environment variable " + name + " must be an integer");
  }
  return v;
}

/**
 * Retrieves an optional environment variable as an integer.
 * Returns a default value if the environment variable is not set.
 * Throws an error if the environment variable is not a valid integer.
 *
 * @param name - The name of the environment variable.
 * @param defaultValue - The default value to return if the environment variable is not set.
 * @returns The value of the environment variable as an integer, or the default value.
 * @throws Error if the environment variable is not a valid integer.
 */
export function getOptionalEnvInt(name: string, defaultValue: number): number {
  const v: string | undefined = process.env[name];
  if (v === undefined || v === null) {
    return defaultValue;
  }
  const n: number = parseInt(v);
  if (isNaN(n)) {
    throw Error("Environment variable " + name + " must be an integer if provided");
  }
  return n;
}

/**
 * Retrieves a mandatory environment variable as a float.
 * Throws an error if the environment variable is not set or is not a valid float.
 *
 * @param name - The name of the environment variable.
 * @returns The value of the environment variable as a float.
 * @throws Error if the environment variable is not set or is not a valid float.
 */
export function getMandatoryEnvFloat(name: string): number {
  const v: number = parseFloat(getMandatoryEnvString(name));
  if (isNaN(v)) {
    throw Error("Environment variable " + name + " must be a float");
  }
  return v;
}

/**
 * Retrieves an optional environment variable as a float.
 * Returns a default value if the environment variable is not set.
 * Throws an error if the environment variable is not a valid float.
 *
 * @param name - The name of the environment variable.
 * @param defaultValue - The default value to return if the environment variable is not set.
 * @returns The value of the environment variable as a float, or the default value.
 * @throws Error if the environment variable is not a valid float.
 */
export function getOptionalEnvFloat(name: string, defaultValue: number): number {
  const v: string | undefined = process.env[name];
  if (v === undefined || v === null) {
    return defaultValue;
  }
  const n: number = parseFloat(v);
  if (isNaN(n)) {
    throw Error("Environment variable " + name + " must be a float if provided");
  }
  return n;
}

/**
 * Retrieves a mandatory environment variable as a boolean.
 * Throws an error if the environment variable is not set or is not a valid boolean.
 *
 * @param name - The name of the environment variable.
 * @returns The value of the environment variable as a boolean.
 * @throws Error if the environment variable is not set or is not a valid boolean.
 */
export function getMandatoryEnvBool(name: string): boolean {
  const v: string = getMandatoryEnvString(name);
  if (v === "true") {
    return true;
  } else if (v === "false") {
    return false;
  } else {
    throw Error("Environment variable " + name + " must be a boolean");
  }
}

/**
 * Retrieves an optional environment variable as a boolean.
 * Returns a default value if the environment variable is not set.
 * Throws an error if the environment variable is not a valid boolean.
 *
 * @param name - The name of the environment variable.
 * @param defaultValue - The default value to return if the environment variable is not set.
 * @returns The value of the environment variable as a boolean, or the default value.
 * @throws Error if the environment variable is not a valid boolean.
 */
export function getOptionalEnvBool(name: string, defaultValue: boolean): boolean {
  const v: string | undefined = process.env[name];
  if (v === undefined || v === null) {
    return defaultValue;
  }
  if (v === "true") {
    return true;
  } else if (v === "false") {
    return false;
  } else {
    throw Error("Environment variable " + name + " must be a boolean if provided");
  }
}