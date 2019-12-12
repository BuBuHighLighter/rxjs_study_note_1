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