import {Observable} from 'rxjs';
import {map, filter} from 'rxjs/operators';

(function main() {
    getData()
    .pipe(
        filter((value: any) => {
            if (value % 2 === 0) {
                return true;
            } else {
                return false;
            }
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