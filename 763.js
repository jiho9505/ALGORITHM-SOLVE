const S = "ababcbacadefegdehijhklij"
// Output: [9,7,8]

function solution(S) {
    let answer = [];
    let d = {};
    let dp = [];
    let start = 0;
    let stA = 0;

    for(let i = 0; i< S.length; i++){
        d[S[i]] = i;
    }
   
    for(let i = 0; i< S.length; i++){
        dp.push(d[S[i]]); 
    }

    while (start < S.length) {
        let end = dp[start];
        while(start <= end){
            if(dp[start] > end) end = dp[start];
            start++;
        }

        answer.push(end-stA+1);
        stA = end+1;
    }


    return answer;
}

let ans = solution(S);
console.log(ans);