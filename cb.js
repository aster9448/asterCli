console.log("1");
function test(callback){
    console.log("2");
    callback() ;

}

test(function(){console.log(3);})
