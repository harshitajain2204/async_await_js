function B(){
    console.log(" wait... resolving the promise");
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            
            resolve("resolved the promise from function b");
        },5000);
    });
}

async function A(){
    let po=await B();
    console.log(po);
    console.log("done");
}
//calling the function
A();