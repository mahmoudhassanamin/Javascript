function sumArray(arr){
    try{
        let sum=0;
        arr.forEach((num)=>{
            if (typeof num === 'number'){
                sum += num;
            }
            else {
                throw 'Target array must contain numbers only';
            }
        })
        return sum;
    }catch(error){
        console.error(error);
    }

}

