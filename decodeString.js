// Write your code below this line
let regex = /[0-9]/
const decoder= (string) => {

    let newString = []
    for(let i = 1; i<string.length ; i++)
    {
        if(regex.test(string[0])){
        const newChar = parseInt(string.charCodeAt(i))+ parseInt(string[0])
        newString.push(String.fromCharCode(newChar))
        //newString.push(string[i]+string[0])
         
        }
    }    
    return newString.join("")
}



console.log(decoder("3ce"))// "b"
// >>> "3ce" // "fh"
// >>> "2fcjjm" // "hello"
console.log(decoder('2fcjjm'))