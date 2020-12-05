const { NODE_ENV } = process.env;

export const NODE_ENV_IS_DEVELOPMENT = NODE_ENV === 'development';
export const NODE_ENV_IS_PRODUCTION = NODE_ENV === 'production';
export const NODE_ENV_IS_TEST = NODE_ENV === 'test';
