export const getLastSegment = (pathname: string) =>
  pathname.split('/').filter(Boolean).at(-1) ?? '';

export const isSegment = (pathname: string, name: string) =>
  getLastSegment(pathname) === name;
