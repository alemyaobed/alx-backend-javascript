var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Initialize a Teacher object
var initializeTeacher = function (firstName, lastName, fullTimeEmployee, location, additionalAttributes) {
    return __assign({ firstName: firstName, lastName: lastName, fullTimeEmployee: fullTimeEmployee, location: location }, additionalAttributes);
};
// Example usage
var teacher3 = initializeTeacher("John", "Doe", false, "London", { contract: false });
console.log(teacher3);
// Example usage
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: true,
    location: 'London',
    numberOfReports: 17,
};
console.log(director1);
