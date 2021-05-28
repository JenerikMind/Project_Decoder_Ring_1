// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function() {
    // you can add any code you want within this function scope

    function polybius(input, encode = true) {
        // trim whitespace, make lower case and split into an array
        // to feed into a helper function
        const inputArr = input.trim().toLowerCase().split(' ');

        // init some variables to contain processed data
        let codedMsgArr = [];
        let completeMsg = "";

        if (encode) {
            // encode the message
            for (let word in inputArr) {
                codedMsgArr.push(encodeWord(inputArr[word]));
            }
            completeMsg = codedMsgArr.join(' ');
        } else {
            // decode the message
            for (let word in inputArr) {
                codedMsgArr.push(decodeMessage(inputArr[word]));
            }
            completeMsg = codedMsgArr.join(' ');
        }

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
                    const index = polybiusSq[row].indexOf(findChar);
                    // both values +1 because a polybius sq doesn't start from 0
                    // col index
                    code += index + 1;
                    // row index
                    code += parseInt(row) + 1;
                };
            }
        }

        return code;
    }

    function decodeMessage(code) {
        const polySq = createSquare();
        // loop through the code, each letter should be mapped
        // to 2 ints so i+2 would be appropriate
        let col = 0;
        let row = 0;
        let decodedMsg = "";

        for (let i = 0; i < code.length; i += 2) {
            // col and row -1 because arrays begin from 0
            col = parseInt(code[i]) - 1;
            row = parseInt(code[i + 1]) - 1;
            decodedMsg += polySq[row][col];
        }

        return decodedMsg;
    }

    return {
        polybius,
    };
})();


module.exports = { polybius: polybiusModule.polybius };