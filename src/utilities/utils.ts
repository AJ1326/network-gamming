export default class Utils {
  static nullValitor(val: any) {
    if (val !== '' && val !== undefined && val !== null && val !== [] && val !== false) {
      return true;
    } else {
      return null;
    }
  }

  static isEmpty(obj: {}) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }
    return JSON.stringify(obj) === JSON.stringify({});
  }
}
