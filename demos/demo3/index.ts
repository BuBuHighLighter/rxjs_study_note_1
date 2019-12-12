import {Observable} from 'rxjs';

(function main() {
    getData().subscribe((data) => {
        console.log(data);
    })
})()


export function getData() {
    return new Observable((observer) => {
        setTimeout(() => {
            let userName = '张三';
            observer.next(userName);
        }, 1000);
    })
}
