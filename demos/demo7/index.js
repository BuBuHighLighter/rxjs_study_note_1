"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
(function main() {
    getData()
        .pipe(operators_1.filter((value) => {
        if (value % 2 === 0) {
            return true;
        }
        else {
            return false;
        }
    }))
        .subscribe((data) => {
        console.log(data);
    });
})();
function getData() {
    let count = 0;
    return new rxjs_1.Observable((observer) => {
        setInterval(() => {
            count++;
            observer.next(count);
        }, 1000);
    });
}
