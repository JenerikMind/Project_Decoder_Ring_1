// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function() {
    // you can add any code you want within this function scope

    function caesar(input, shift, encode = true) {
        if (shift === 0 || shift < -25 || shift > 25 || !shift) return false;

        // trim the input to prevent excess spaces and 
        // make everything lowercase
        const cleanedInput = input.trim().toLowerCase();

        if (!encode) {
            return encodeMsg(cleanedInput, -shift);
        }

        return encodeMsg(cleanedInput, shift);
    }

    function encodeMsg(cleanedInput, shift) {
        let shiftCode = '';
        // loop through each letter and shift ascii code by requested amount
        // ascii codes 97 - 122
        for (let char in cleanedInput) {
            let charAscii = cleanedInput.charCodeAt(char);

            // check if ascii is a lowercase char, otherwise ignore it
            if (charAscii >= 97 && charAscii <= 122) {
                charAscii += shift;

                // if the ascii exceeds the equiv of 'z'
                // subtract by 26 (letters in alphabet)
                if (charAscii > 122) charAscii -= 26;

                // if the ascii exceeds the equiv of 'a'
                // add by 26 (letters in alphabet)
                if (charAscii < 97) charAscii += 26;
            }

            shiftCode += String.fromCharCode(charAscii);
        }
        return shiftCode;
    }

    return {
        caesar,
    };
})();

module.exports = { caesar: caesarModule.caesar };