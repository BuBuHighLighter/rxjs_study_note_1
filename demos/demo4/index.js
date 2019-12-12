"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
(function main() {
    let d = getData().subscribe((data) => {
        console.log(data);
    });
    setTimeout(() => {
        d.unsubscribe();
    }, 1000);
})();
function getData() {
    return new rxjs_1.Observable((observer) => {
        setTimeout(() => {
            let userName = '张三';
            observer.next(userName);
        }, 3000);
    });
}
exports.getData = getData;
