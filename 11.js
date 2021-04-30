/*
    투포인터 새로운 응용 ver
*/

const S = [1,8,6,2,5,4,8,3,7]

function solution(S) {
    let water = 0;
    let i = 0; 
    let j = S.length - 1;
        
    while (i < j){
        water = Math.max(water, (j - i) * Math.min(S[i], S[j]))
        if (S[i] < S[j])
            i += 1;
        else
            j -= 1;
    }
    return water

}

let ans = solution(S);
console.log(ans);