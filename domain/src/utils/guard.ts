export function guard<T> (value: T | undefined): T {
  if (value === undefined) {
    throw new Error('Must be defined')
  }
  return value
}
