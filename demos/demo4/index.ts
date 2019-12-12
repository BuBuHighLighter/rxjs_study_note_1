import {Observable} from 'rxjs';

(function main() {
    let d = getData().subscribe((data) => {
        console.log(data);
    })

    setTimeout(() => {
        d.unsubscribe();
    }, 1000)
})()


export function getData() {
    return new Observable((observer) => {
        setTimeout(() => {
            let userName = '张三';
            observer.next(userName);
        }, 3000);
    })
}
