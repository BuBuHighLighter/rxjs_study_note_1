"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
(function main() {
    getData().subscribe((data) => {
        console.log(data);
    });
})();
function getData() {
    let count = 0;
    return new rxjs_1.Observable((observer) => {
        setInterval(() => {
            count++;
            let userName = '张三' + count;
            observer.next(userName);
        }, 1000);
    });
}
exports.getData = getData;
