import {Observable} from 'rxjs';
import {map, filter} from 'rxjs/operators';

(function main() {
    getData()
    .pipe(
        map((value: any) => {
            return value * value;
        })
    )
    .subscribe((data) => {
        console.log(data);
    });
})()

function getData() {
    let count = 0;
    return new Observable((observer) => {
        setInterval(() => {
            count++;
            observer.next(count);
        }, 1000);
    })
}