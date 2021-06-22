/*
    우선순위큐 문제지만 인풋이 작아서 그냥 구현 가능 - [라.턴 3]
    출제 의도 : 큐 구현력

    우선순위큐 용도 : 삽입과 삭제마다 정렬을 해야할 경우 효율적
    (문제들 보면 n 20만이상 , 10억이상 등등에 사용) - 5000 이정도는 그냥 구현 노상관
*/

const solution = () => {

    const arr = [[0,1],[0,2],[6,3],[8,4]]

    /*
        [[1,3],[4,2],[5,3],[8,11],[25,25]] // 60
        [[1,3],[3,2],[5,4]] // 20
        [[0,3],[5,4]] // 0
        [[0,1],[0,2],[6,3],[8,4]] // 40
        [[5,2],[2,2],[6,3],[9,2]] // 33
    */

    arr.sort((a,b) => {
        if(a[0] === b[0]){
            return b[1]-a[1];
        }else{
            return a[0]-b[0];
        }
    })

    let i = 0;
    let std = arr[0][0];
    let cost = 0;
    let temp = [];

    while(i<arr.length || temp.length > 0){

        if(temp.length === 0 && i<arr.length  && std < arr[i][0]){
            std = arr[i][0];
            i += 1;
        }
        for(let j = i; j < arr.length; j++){
            if(std >= arr[j][0]){
                temp.push(arr[j]);
                i=j+1;
            }else{ 
                break;
            }
        }
        
        if(temp.length > 0){
            temp.sort((a,b) => {
                if(a[1] === b[1]){
                    return a[0]-b[0];
                }else{
                    return b[1]-a[1];
                }
            })
    
            let k = temp.shift();
            cost += (std - k[0]) * k[1];
            std += 5;
        }
        
    }

    console.log('answer :' ,cost);
}

solution();