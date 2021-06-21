/*
    Not important!
 */
 var findUnsortedSubarray = function(nums) {
    let temp = [...nums];
    let idxArr = [];
    let answer = 0;
    
    temp.sort((a,b) => a - b)
    
    for(let i = 0; i<nums.length; i++){
        if(nums[i] !== temp[i]) idxArr.push(i);
    }
    
    if(idxArr.length){
        idxArr.sort((a,b) => a - b);
        
        if(idxArr.length === 1) return 1;
        
        answer = idxArr[idxArr.length-1] - idxArr[0] + 1;
    }
    
    
    return answer;
};