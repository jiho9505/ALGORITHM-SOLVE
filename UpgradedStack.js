/*
    자신 기준 왼쪽에서 더 큰 값과의 거리
    (스택 응용)
*/
const arr = [10,5,7,8,4,3,2,9]
const c = new Array(arr.length).fill(-1)
let s = [];

const solution = () => {
    for(let i = 0; i < arr.length; i++){
        while(s.length > 0){
            if(arr[s[s.length-1]] > arr[i]){
                let j = s[s.length-1];
                let idx = i - j;
                c[i] = idx;
                break;
            }else{
                s.pop();
            }     
        }
        s.push(i);
    }
    console.log(c);
}

solution();