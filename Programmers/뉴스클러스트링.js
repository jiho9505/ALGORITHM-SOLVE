function solution(str1, str2) {
    let answer = 0;
    // let str1 = 'FRANCE';
    // let str2 = 'french';
    let stra = str1.toLowerCase();
    let strb = str2.toLowerCase();
    let arr1 = [];
    let arr2 = [];
    let tarr1 = [];
    let tarr2 = [];
    let narr1 = [];
    let narr2 = [];
    let d = {};
    let count = 0;
    let tempstr = "";
    
    for(let i=0; i<stra.length-1; i++){
        tempstr = stra.slice(i,i+2);
        arr1.push(tempstr);
        
    }
    console.log(arr1)
    for(let i=0; i<strb.length-1; i++){
        tempstr = strb.slice(i,i+2);
        arr2.push(tempstr);
    }
    
    tarr1 = arr1.map( str => str.replace(/[^a-z]/g,''))
    tarr2 = arr2.map( str => str.replace(/[^a-z]/g,''))
    
    for(let i=0; i<arr1.length; i++){
        if(arr1[i] === tarr1[i]){
            narr1.push(arr1[i]);
        }
    }
    
    for(let i=0; i<arr2.length; i++){
        if(arr2[i] === tarr2[i]){
            narr2.push(arr2[i]);
        }
    }
    
    for(let i=0; i<narr1.length; i++){
        for(let j=0; j<narr2.length; j++){
        
            if(narr1[i] === narr2[j] && !d[j]){
                count++;
                d[j] = 1;
                break;
                }
            
        }
    }
    if(!narr1.length && !narr2.length){
        answer = 1;
    } 
    else{
        answer = count / (narr1.length+narr2.length-count)
    }
    
    answer = parseInt(answer * 65536);
    return answer;
}