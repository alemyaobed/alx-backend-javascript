export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw new TypeError('code must be as string')
    }
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string')
    }
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('name must be a string')
    }
    this._name = value;
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('code must be as string')
    }
    this._code = value;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
