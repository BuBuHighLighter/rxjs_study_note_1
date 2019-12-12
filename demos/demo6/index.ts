import {Observable} from 'rxjs';

(function main() {
    getData().subscribe((data) => {
        console.log(data);
    });
})()

export function getData() {
    let count = 0;
    return new Observable((observer) => {
        setInterval(() => {
            count++;
            let userName = '张三' + count;
            observer.next(userName);
        }, 1000);
    })
}