//function defination 
async function outside() {  //async keyword
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done"), 2000)
    });

    let result = await promise;  //wait until the promise resolve
    console.log(result);
}
//calling the function
outside();