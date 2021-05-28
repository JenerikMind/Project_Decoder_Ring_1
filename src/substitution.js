// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function() {
    // you can add any code you want within this function scope

    function substitution(input, alphabet, encode = true) {
        // if alphabet missing, return false
        if (!alphabet) return false;

        // check to see if given key is a proper length
        if (alphabet.length != 26) return false;

        // check for any duplicates in given key
        if (duplicates(alphabet)) return false;

        // create the cipher to encode / decode
        let cipher = {};
        if (encode) {
            cipher = createEncryptionCipher(alphabet);
        } else {
            cipher = createDecryptionCipher(alphabet);
        }

        // encode a message
        const cleanedInput = input.trim().toLowerCase().split(' ');
        let messageArr = [];

        // loop through and add to the array of coded words
        for (let word in cleanedInput) {
            messageArr.push(shiftEncode(cleanedInput[word], cipher));
        }

        // join them with a space to preserve formatting and return result
        return messageArr.join(' ');
    }

    function createEncryptionCipher(givenAlphabet) {
        let alphabet = 'z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,i,j,h,g,f,e,d,c,b,a'.split(',');
        let cipher = {};

        for (let i = 0; i < givenAlphabet.length; i++) {
            cipher[alphabet.pop()] = givenAlphabet[i];
        }

        return cipher;
    }

    function createDecryptionCipher(givenAlphabet) {
        let alphabet = 'z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,i,j,h,g,f,e,d,c,b,a'.split(',');
        let cipher = {};
        for (let char in givenAlphabet) {
            cipher[givenAlphabet[char]] = alphabet.pop();
        }

        return cipher;
    }

    function duplicates(givenAlphabet) {
        let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index);
        let charArr = [];

        for (let i = 0; i < givenAlphabet.length; i++) {
            charArr.push(givenAlphabet[i]);
        }

        if (findDuplicates(charArr).length != 0) {
            return true;
        }

        return false;
    }

    function shiftEncode(word, cipher) {
        let coded = "";
        for (let char in word) {
            coded += cipher[word[char]];
        }
        return coded;
    }
    return {
        substitution,
    };

})();

substitutionModule.substitution('abc', 'llmoknijbuhvygctfxrdzeswaq');

module.exports = { substitution: substitutionModule.substitution };