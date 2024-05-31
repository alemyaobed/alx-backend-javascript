import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number')
    }
    if (!(currency instanceof Currency)) {
      throw new Error('currency must be an instance of the currency class')
    }
      this._amount = amount;
      this._currency = currency;
  }
  get amount() {
    return this._amount;
  }
  get currency() {
    return this._currency;
  }
  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('amount must be a number')
    } this._amount = value;
  }
  set currency(value) {
    if (!(currency instanceof Currency)) {
      throw new Error('currency must be an instance of the currency class')
    }
      this._currency = value;
  }
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }
  static convertPrice(amount, conversionRate){
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number')
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversion rate must be a number')
    }
    return amount * conversionRate;
  }
}
