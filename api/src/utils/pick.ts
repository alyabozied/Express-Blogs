/**
 * Create an object composed of the picked object properties
 * @param object - The source object from which properties will be picked
 * @param keys - The array of keys to pick from the object
 * @returns A new object with the picked properties
 */
function pick<T extends object, K extends keyof T>(object: T, keys: K[]): Pick<T, K> {
    return keys.reduce((obj, key) => {
      if (object && Object.prototype.hasOwnProperty.call(object, key)) {
        obj[key] = object[key];
      }
      return obj;
    }, {} as Pick<T, K>);
  }
  
  export default pick;