/*
    릿코드 온도 / 백준 오큰수 응용ver (스택) - [라.턴 2]
    난이도 : 골드1 예상

    1번째 풀이
    완벽
*/

const solution = () => {
    let stack = [];
    const arr = [1,10,999999,7,999998,3,1,4,1000000,3,1000000]; // 1 2 8 2 2 4 5 8 -1 8 -1
    const c = new Array(arr.length).fill(-1);

    for(let i = 0; i < arr.length; i++){
        
        while(stack.length > 0 && arr[stack[stack.length-1]] < arr[i]){
            let j = stack.pop();
            c[j] = i;
        }
        stack.push(i);
    }

    stack = [];

    for(let i = 0; i < arr.length; i++){
        
        while(stack.length > 0){
            if(arr[stack[stack.length-1]] > arr[i]){
                if(c[i] === -1){
                    c[i] = stack[stack.length-1];
                }else{
                    if(i - stack[stack.length-1] <= c[i] - i) 
                        c[i] = stack[stack.length-1];
                }
                break;
            }else{
                stack.pop();
            }
        }
        stack.push(i);
    }

    for(let i = 0; i < c.length; i++){
        console.log(c[i]);
    }
}

solution()

/*
    릿코드 온도 / 백준 오큰수 응용ver (스택) - [라.턴 2]
    난이도 : 골드1 예상

    2번째 풀이
    모든 경우의 수 다 만족하지만
    모든 value가 동일한 값일때 n^2 나오는듯...
*/
const solution = () => {
    let stack = [];
    const arr = [1,10,999999,7,999998,3,1,4,1000000,3,1000000];
    const c = new Array(arr.length).fill(-1);

    for(let i = 0; i < arr.length; i++){
        const temp = [];
        while(stack.length > 0){
            if(arr[stack[stack.length-1]] < arr[i]){
                let j = stack.pop();
                if(c[j] === -1){
                    c[j] = i;
                    continue;
                }
                if(c[j] >= 0){
                    if(i-j < j-c[j]) c[j] = i;
                }
            }else if(arr[stack[stack.length-1]] > arr[i]){
                if(c[i] === -1) c[i] = stack[stack.length-1];
                break;
            }else{
                let t = stack.pop();
                temp.push(t);
            }
        }
        temp.length > 0 ? stack = [...stack,...temp] : '';
        stack.push(i);
    }

    for(let i = 0; i < c.length; i++){
        console.log(c[i]);
    }
}

solution()