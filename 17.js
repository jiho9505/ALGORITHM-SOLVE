/*
    조합의 새로운 응용
*/

const d = {
    2 : ['a','b','c'],
    3 : ['d','e','f']
}

const S = "23";
let arr = [];
let temp = [];

const DFS = (depth, S) => {
    if(depth === S.length){ // 3은 문제에 따라 다르다
        let str = "";
        for(let j = 0; j<arr.length; j++){
            str += arr[j];
        }
        temp.push(str);
        return;
    }
    for(let i = 0; i < d[S[depth]].length; i++){ 
        let x = d[S[depth]][i];
        arr.push(x);
        DFS(depth+1,S);
        arr.pop();    
    }
}

function solution(S) {
    let answer = [];
    DFS(0,S);

    answer = temp;
    return answer;
}

let ans = solution(S);
console.log(ans);
