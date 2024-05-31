
// Consider this class as an abstract class. And make sure that any class that extends from it should implement a method named evacuationWarningMessage.
// If a class that extends from it does not have a evacuationWarningMessage method, throw an error with the message Class extending Building must override evacuationWarningMessage

export default class Building {
    constructor(sqft) {
        if (typeof sqft !== 'number') {
            throw new TypeError('sqft must be a number');
        }
        this._sqft = sqft;
    }
    get sqft() {
        return this._sqft;
    }
    set sqft(value) {
        if (typeof sqft !== 'number') {
            throw new TypeError('sqft must be a number');
        }
        this._sqft = value;
    }
}
