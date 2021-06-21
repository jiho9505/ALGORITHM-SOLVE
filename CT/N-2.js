/*
1)
input : 'I love you' // input 안에 삽입을 하는데 이 index를 보전한채로 넣어야하기 때문에 split을 꼭 떠올려야함.
keyword : 'mode' // 계속 각각의 문자값 돌아가면서 투입 
skip : [0,0,3,5,10] // 몇칸씩 jump를 의미 jump한곳에 문자를 넣어야하는데 그 전에 문자가 있을 시 그곳에 투입
암호화 시키는 문제
output : 'moI ldovee you'

2)
input = 'i love coding'
keyword = 'mode'
skip = [0,10]
output : mi loove coding
*/

const s = 'i love coding'
const keyword = 'mode'
const skip = [0,10]
const stringSize = s.length

const solution = (s) => {
    s = s.split('');
    let idx = 0;
    let start = 0;
    let d = {};

    for(let i = 0; i < skip.length; i++){
        for(let j = start; j <= start + skip[i]; j++){
            if(stringSize-1 < j) break;
            if(j === start + skip[i]){
                if(d[j]){
                    d[j] += keyword[idx];   
                }else{
                    d[j] = keyword[idx];
                }
                idx++;
                if(idx === keyword.length) idx = 0;
                start = j;
            }else{
                if(s[j] === keyword[idx]){
                    if(d[j]){
                        d[j] += keyword[idx];   
                    }else{
                        d[j] = keyword[idx];
                    }
                    idx++;
                    if(idx === keyword.length) idx = 0;
                    start = j;
                    break;
                }
            }
        }
    }
    console.log(d)
    for(let key in d){
        let num = parseInt(key)
        s[num] = d[num] + s[num];
    }

    let answer = s.join('');
    console.log(answer);
    return answer;
}

solution(s);