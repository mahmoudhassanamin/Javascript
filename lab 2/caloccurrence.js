var caloccurrence= (str)=>{
    var arr ={};
    for(var i=0;i<str.length;i++){
        if(arr[str[i]] === undefined )
        arr[str[i]]=1;
        else
        arr[str[i]]++;
    }
    for(var key in arr){
        if (key === " "){
            console.log("white space ocurred ",arr[key]," time");
        }
        else
            console.log(key," ocurred ",arr[key]," time");
    }
  }

//   caloccurrence("mahmoud hassa amin")

  
 // another algorithm to calculate number of occurrences of all characters
  var caloccurrence2= (str)=>{
    var arr =[];
    for(var i=0;i<str.length;i++){
        var index=str.charCodeAt(i);
        if(arr[index] === undefined )
        arr[index]=1;
        else
        arr[index]++;
    }
    
    for(var key in arr){
        if (key == 32){
            console.log("white space ocurred ",arr[key]," time");
        }
        else
            console.log(String.fromCharCode(key)," ocurred ",arr[key]," time");
    }
  }
//   caloccurrence2("mahmoud hassa amin")