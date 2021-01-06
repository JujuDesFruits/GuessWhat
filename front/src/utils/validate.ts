export const isValidUsername = (str: string) => true;

export const isExternal = (path: string) => /^(https?:|mailto:|tel:)/.test(path)
