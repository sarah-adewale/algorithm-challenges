const loopNTimes = (n) => {
    console.log("n === n", n)
    if(n <= 1){
        return 'complete';
    }
    return loopNTimes(n - 1) 

}

loopNTimes(3) 

//in the first iteration n = 3. The loop runs a second -- n is 2, 