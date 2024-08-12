module.exports = function reverse (n) {
    const strNum = n.toString();
    const revStr = strNum.split('').reverse().join('');
    const revNum = parseInt(revStr);
    return revNum;
};
