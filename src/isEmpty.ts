import { isNuil, isArray, isObject } from './index'
export default function isEmpty(value: any): boolean {
  if (isNuil(value)) {
    return true;
  }
  if (isArray(value) || isObject(value)) {
    return !Object.keys(value).length;
  }
  return false
}