// Write a function that when given a URL as a string, parses out just the domain
// name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

//string
//string


function replaceString(str){
   let str1 = str.replace('http://', '')
   let str2 = str1.replace('https://', '')
   let str3 = str2.replace('www.', '')
   return str3.split('.').slice(0, 1).join('')
}

console.log((replaceString("http://github.com/carbonfive/raygun")), "github")
console.log((replaceString("http://www.zombie-bites.com")), "zombie-bites")
console.log((replaceString("https://www.cnet.com")), "cnet")
console.log((replaceString("https://www.colorme.io")), "colorme")

