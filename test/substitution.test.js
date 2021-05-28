const expect = require('chai').expect;
const subs = require('../src/substitution').substitution;

describe("substitution", () => {
    it("should return false if given alphabet is < 26 chars", () => {
        const actual = subs('abc', 'abc');
        expect(actual).to.be.false;
    });

    it("should return false if any chars in given alphabet are duplicates", () => {
        const actual = subs('abc', 'llmoknijbuhvygctfxrdzeswaq');
        expect(actual).to.be.false;
    });

    it("should return 'message' as 'ykrrpik'", () => {
        const expected = 'ykrrpik';
        const actual = subs('message', 'plmoknijbuhvygctfxrdzeswaq');
        expect(actual).to.equal(expected);
    });

    it("should not differentiate b/t A and a", () => {
        const expected = 'p';
        const actual = subs('a', 'plmoknijbuhvygctfxrdzeswaq');
        expect(actual).to.equal(expected);
    });

    it("should maintain spaces in a given message", () => {
        const expected = 'p ykrrpik';
        const actual = subs('A message', 'plmoknijbuhvygctfxrdzeswaq');
        expect(actual).to.equal(expected);
    });
});