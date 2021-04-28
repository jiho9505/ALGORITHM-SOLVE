/*
    창의력 요구하는 STACK 문제
*/

const T = [73, 74, 75, 71, 69, 72, 76, 73]

var dailyTemperatures = function(temperatures) {
    let res = new Array(T.length).fill(0);
    let stack = [];
    for(let i=0; i<temperatures.length; i++){
    	while(stack.length>0 && temperatures[stack[stack.length-1]]<temperatures[i]){
    		let j = stack.pop();
    		res[j] = i-j;
    	}
    	stack.push(i);
    }
    return res;
};

let ans = dailyTemperatures(T);
console.log(ans);