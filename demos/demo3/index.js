"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
(function main() {
    getData().subscribe((data) => {
        console.log(data);
    });
})();
function getData() {
    return new rxjs_1.Observable((observer) => {
        setTimeout(() => {
            let userName = '张三';
            observer.next(userName);
        }, 1000);
    });
}
exports.getData = getData;
