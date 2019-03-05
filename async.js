var fs = require('fs');
console.log(1);

fs.readFile('example.txt', 'utf8', function(err, data) {
    if(err) {
        // 파일 읽기 실패
        console.error(err);
        throw err;
    }
    else {
        // 파일 읽기 성공
        console.log(data);
        console.log(2);

    }
});

console.log(3);

