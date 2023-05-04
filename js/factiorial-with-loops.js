function logNumbersRecursively (start, end) {

    function recurse(i){
        if(i < end){
            recurse(i + 1)
        }
    }
    recurse(start)
}

logNumbersRecursively(1,3)

 function recurse(i){
        if(i < end){
            recurse(i + 1)
        }
    }
    recurse(start) //2
    ~~~~~~


     function recurse(i){
        if(i < end){
            recurse(i + 1)
        }
    }
    recurse(start) // 3
    ~~~~~~

     function recurse(i){
        if(i < end){
            recurse(i + 1)
        }
    }
    recurse(start)
    ~~~~~~ //undfined (as soon as it reaches the base case, it returns an undefined value and it gets pooped off the call stack to show complete)