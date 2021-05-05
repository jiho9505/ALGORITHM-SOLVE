/*
    Stack 응용 괄호 문제인데 이것을 응용한 ver
 */
 var longestValidParentheses = function(s) {
    let stack = [];
    let count = 0;
    let max = 0;
    const arr = new Array(s.length).fill(0);
    
    for(let i = 0; i < s.length; i++){
        
        if(s[i] === ')'){
            if(stack.length > 0 && stack[stack.length-1][0] === '('){
                stack.pop();
                arr[i] = 2;
            }else{
                arr[i] = -1;
            }
        }else{
            stack.push([s[i],i]);
        }
    }
    
    
    while(stack.length>0){
        let j = stack.pop();
        arr[j[1]] = -1;
    }

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === -1) count=0;
        else{
            count += arr[i];
            if(max < count) max = count;
        }
    }
    return max;
};