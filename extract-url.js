// Write a function that when given a URL as a string, parses out just the domain 
// name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

//url trad no funny biz
//str

function urlString(str){
   
    secondStr = str.replace('http://', '')
    thirdStr = secondStr.replace('https://', '')
    fourthStr = thirdStr.replace('www.', '')
    return fourthStr.split('.')[0]
}

console.log(urlString('http://github.com/carbonfive/raygun'))
console.log(urlString('http://www.zombie-bites.com'))
console.log(urlString('https://www.cnet.com'))
