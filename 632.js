var smallestRange = function(nums) {
    let d = {};
    let arr = [];
    let answer = [];
    let min = 100001;
    
    nums.forEach(numarr => {
        numarr.forEach(num => {
            d[num] = 1;
        })
    })
    
    for(let key in d){
        arr.push(parseInt(key));
    }
    arr.sort((a,b) => a-b);
    console.log('arr',arr)
    let end = 0;
    let start = 0
    // for(let start = 0; start<arr.length; start++){
        while(end < arr.length){
            let find = false;
            for(let i = 0; i< nums.length; i++){
                find = false;
                for(let j = 0; j< nums[i].length; j++){
                    if(arr[start] <= nums[i][j] && nums[i][j] <=arr[end]){
                        find = true;
                        break;
                    }
                }
                if(!find){
                    end++;
                    console.log('e',end)
                    break;
                }
            }
            if(find){
                if(start === end) return [arr[start],arr[end]];
                else{
                    if(arr[end] - arr[start] < min){
                        answer = [arr[start],arr[end]];
                        min = arr[end] - arr[start];
                    }
                    start++;
                    console.log('s',start)
                }
            }
        }
    // }
    
    return answer;
};