function solution(cacheSize, cities) {
    let answer = 0;
    let d = {};
    
    for(let i = 0; i < cities.length; i++){
        cities[i] = cities[i].toLowerCase();    
    }
    
    let end = 0;
    let count = 0;
    
    for(let start = 0; start < cities.length; start++){
        while(count <= cacheSize && end < cities.length){
            if(!d[cities[end]]){
                d[cities[end]] = 1;
                answer += 5;
                count++;
            }else{
                d[cities[end]] += 1;
                answer += 1;
            } 
            
            end++;
        }
        
        d[cities[start]] -= 1;
        d[cities[start]] === 0 ? count-- : ''
    }
   
    return answer;
}