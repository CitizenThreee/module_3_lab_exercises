function Truncate(str, max){
    if(str.length <= max) return str;
    let newStr = str.substr(0, max);
    return newStr + "..."
}

console.log(Truncate('This text will be truncated if it is too long', 25))
console.log(Truncate('This is exactly 25 chars.', 25))