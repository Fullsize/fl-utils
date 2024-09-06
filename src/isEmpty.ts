import { isNuil, isArray, isObject } from './index';
/**
 * 检查给定的值是否为空。
 * @param value 任意类型的值，将被检查是否为空。
 * @returns 返回一个布尔值，如果值为空则为true，否则为false。
 */
export default function isEmpty(value: any): boolean {
  if (isNuil(value)) {
    return true;
  }
  if (isArray(value) || isObject(value)) {
    return !Object.keys(value).length;
  }
  return false
}