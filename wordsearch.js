const wordSearch = (letters, word) => { 
    
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        // console.log('horizontalJoin:', horizontalJoin);
        if (l.includes(word)) {
            return true;
        }
    }
​
    
    let arr = [];
    for (let i = 0; i < letters.length - 1; i++) {
        let wordx = [];
        for (let j = 0; j < letters.length; j++){
            wordx.push(letters[j][i])
            // let wordy = wordx.join('');
            if (wordx.join("").includes(word)) {
                return true;
            }
        }
        // console.log(wordx.join(""))
    }
    return false;
}
​
//made by Z Xian, Tom Adam, Mohammed Abdulbaqi
module.exports = wordSearch 