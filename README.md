# Rxjs学习

Rxjs是一种针对异步数据流的编程。简单来说，他将一切数据，包括http请求，DOM事件或者普通数据等包装成流的形式，然后用强大丰富的操作符对流进行处理，是你能以同步编程的方式处理异步数据，并组合不同的操作符来轻松优雅的实现你所需要的功能。

## 目前常见的异步编程的几种方法：

1. 回调函数
2. 事件监听/发布订阅
3. Promise
4. Rxjs


#### 回调函数

[代码示例](./demos/demo1/index.js)

```ts
(function main() {
    getData((data) => {
        console.log(data);
    })
})()

function getData(cb) {
    setTimeout(() => {
        let userName = '张三';
        cb(userName);
    }, 1000);
}
```

#### Promise

[代码示例](../rxjs学习2/demos/demo2/index.js)

```ts
(function main() {
    getData().then((data) => {
        console.log(data);
    })
})()

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let userName = '张三';
            resolve(userName);
        }, 1000);
    })
}
```

#### Rxjs

[代码示例](../rxjs学习2/demos/demo3/index.ts)
```ts
import {Observable} from 'rxjs';

(function main() {
    getData().subscribe((data) => {
        console.log(data);
    })
})()

function getData() {
    return new Observable((observer) => {
        setTimeout(() => {
            let userName = '张三';
            observer.next(userName);
        }, 1000);
    })
}
```

Rxjs与Promise写法很相似，但是Rxjs比Promise要强大很多。比如Rxjs可以**中途撤回**、Rxjs可以发射多个值、Rxjs提供了多种工具函数等等。

## Rxjs取消订阅(unsubscribe)

Promise创建之后，动作是无法撤回的。Observable不一样，动作可以通过`unsubscribe()`方法中途撤回，而且Observable在内部做了智能的处理。

【例】

1s之后取消订阅：

[代码示例]()

```ts
import {Observable} from 'rxjs';

(function main() {
    const d = getData().subscribe((data) => {
        console.log(data);
    })

    // 1s之后取消订阅
    setTimeout(() => {
        d.unsubscribe();
    }, 1000);
})()

function getData() {
    return new Observable((observer) => {
        setTimeout(() => {
            let userName = '张三';
            observer.next(userName);
        }, 1000);
    })
}
```

## Rxjs订阅后多次执行

这一点是Promise做不到的，对于Promise来说，最终结果要么resolve，要么reject，而且都只能触发一次。如果在同一个Promise对象上多次调用resolve方法，则会抛出异常。而Observable不一样，他可以不断地触发下一个值，就像`next()`这个方法的名字所暗示的那样。

#### Promise执行多次

[代码示例](../rxjs学习2/demos/demo5/index.js)

```ts
(function main() {
    getData().then((data) => {
        console.log(data);
    })
})()

function getData() {
    return new Promise((resolve, reject) => {
        setInterval(() => {
            let userName = '张三';
            resolve(userName);
        }, 1000);
    })
}
```

#### Rxjs执行多次

```ts
import {Observable} from 'rxjs';

(function main() {
    getData().subscribe((data) => {
        console.log(data);
    });
})()

function getData() {
    let count = 0;
    return new Observable((observer) => {
        setTimeout(() => {
            count++;
            let userName = '张三' + count;
            observer.next(userName);
        }, 1000);
    })
}
```

## Rxjs工具函数——Rxjs6.x之后使用map、filter

#### filter

[代码示例](../rxjs学习2/demos/demo7/index.ts)

```ts
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
```

#### map

[代码示例](../rxjs学习2/demos/demo8/index.ts)

```ts
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
```

#### 在pipe中可以联合使用方法

```ts
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
        }),
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
```

