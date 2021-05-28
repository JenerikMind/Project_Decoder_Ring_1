// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function() {
    // you can add any code you want within this function scope

    function polybius(input, encode = true) {
        const cleanedInput = input.trim().toLowerCase();
        const inputArr = cleanedInput.split(' ');
        let codedMsgArr = [];

        for (let word in inputArr) {
            codedMsgArr.push(encodeWord(inputArr[word]));
        }

        const completeMsg = codedMsgArr.join(' ');
        return completeMsg;
    }

    function createSquare() {
        // alphabet in backwards order as an array to be able
        // to access array functions
        let alphabet = 'z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,i/j,h,g,f,e,d,c,b,a'.split(',');

        // init a 2d array for the square
        let polySq = [
            [],
            [],
            [],
            [],
            []
        ];

        // 5x5 2d array dimension init
        const rows = 5;
        const cols = rows;

        // small nested for loop to populate the square
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                polySq[i][j] = alphabet.pop();
            }
        }

        return polySq;
    }

    function encodeWord(word) {
        let code = "";
        const polybiusSq = createSquare();

        // loop through each char in a word
        for (let char in word) {
            let findChar = word[char];

            // if a char is either 'i' or 'j', replace it with an 'i/j' combo
            if (findChar === 'i' || findChar === 'j') findChar = 'i/j';

            for (let row in polybiusSq) {
                if ((polybiusSq[row].find(char => char === findChar)) !== undefined) {
                    const index = polybiusSq[row].indexOf(findChar) + 1;
                    // col index
                    code += index;
                    // row index
                    code += parseInt(row) + 1;
                };
            }
        }

        return code;
    }

    return {
        polybius,
    };
})();

polybiusModule.polybius('test');

module.exports = { polybius: polybiusModule.polybius };