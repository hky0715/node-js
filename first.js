// import하고싶은 녀석을 require해서 객체로 만듦. import할땐 파일의 경로까지 포함해야함
let repository = require("./file-repository.js");

console.log("Hello Nodejs!", global);

console.log(repository.findAll());