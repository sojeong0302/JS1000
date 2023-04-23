//파일 시스템 접근하기
const fs = require("fs");
//'linux' ? '/dev/stdin' 백준에서 채점
//'/dev/stdin'는 표준 입력 장치
//'/example.txt'내가 입력할것
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname+'/example.txt';
let input = fs.readFileSync(filePath).toString().split("\n");

//공백으로 구분하기 위해서 split(" ") 써줘야함
//그럼 줄바꿈으로 구분하기 위해선 어떻게 해야할까?
//위에 split("\n")으로 줄바꿈으로 설정되어있는줄 알고 split(" ")을 지웠는데 오류남
//컴퓨터는 현재 숫자를 문자로 알고 있음 변경해줘야함 map((item)=>+item)
input = input[0].split(" ").map((item)=>+item);

solution (input[0, 0],input[0,1]);

function solution (A,B){
    A=input[0,0]
    B=input[0,1]
    console.log(A+B)
}