const addd= (a, b) =>{
    return a + b;
}
const subb = (a, b) =>{
    return a - b;
}
const mull = (a, b) =>{
    return a * b;
}
const divv = (a, b) =>{
    if (b === 0) return 'Cannot divide by zero';
    return a / b;
}
module.exports = {addd,subb,mull,divv};