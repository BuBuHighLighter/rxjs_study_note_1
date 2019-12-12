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