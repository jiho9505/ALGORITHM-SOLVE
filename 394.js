/*
Input: s = "3[a]2[bc]" | "3[a2[c]]"
Output: "aaabcbc"
*/

const S = "3[a]2[bc]"

const recursion = (str) => {

    return 
}

function solution(S) {
    let answer = "";
    let T = S;

    for(let i = 0; i<T.length; i++){
        let idx = T.search(/[0-9]+/g);
        if(idx){
            let tempStr;
            for(let j = i; j<idx; j++){
                answer += T[j];
            }
            for(let j = idx+2; j<T.length; j++){
                if(S[j] === ']'){
                    break;
                }else{
                    tempStr += T[j];
                }
            }
            T = T.slice()
        }else{
            for(let j = i; j<T.length; j++){
                answer += T[j];
            }
            break;
        }
    }

    return answer;
}

let ans = solution(S);
console.log(ans);