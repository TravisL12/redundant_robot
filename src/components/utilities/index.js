export const getAsset = (path) => process.env.PUBLIC_URL + path;

export function getPx(value) {
  return `${value}px`;
}

export function getPct(value) {
  return `${value}%`;
}
