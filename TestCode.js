const solution = () => {

    const arr = [[1,3],[4,2],[5,3],[8,11],[25,25]];

    /*
        [[1,3],[4,2],[5,3],[8,11],[25,25]] // 60
        [[1,3],[3,2],[5,4]] // 20
        [[0,3],[5,4]] // 0
        [[0,1],[0,2],[6,3],[8,4]] // 40
        [[5,2],[2,2],[6,3],[9,2]] // 33
    */

   arr.sort( (a,b) => {
       if(a[0] === b[0]) return b[1]-a[1];
       else return a[0]-b[0];
   })

   let start = arr[0][0];
   let total = 0;

   while(1){
        let temp = [];
        for(let i = 1; i < arr.length; i++){
            if(start + 5 >= arr[i][0]){
                temp.push(arr[i]);
            }else break;
        }
   }
   
}

solution();