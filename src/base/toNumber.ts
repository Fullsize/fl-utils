export default function toNumber(value: any) {
  if (typeof value === 'number') {
    return value
  }
  return +value
}