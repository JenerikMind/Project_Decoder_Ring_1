const expect = require('chai').expect;
const caesar = require('../src/caesar').caesar;


describe("Caesar cipher", () => {
    it("should return fasle if shift is 0", () => {
        const acutal = caesar("Invincible", 0);
        expect(acutal).to.be.false;
    });

    it("should return fasle if shift is < -25", () => {
        const actual = caesar("Invincible", -26);
        expect(actual).to.be.false;
    });

    it("should return fasle if shift is > 25", () => {
        const actual = caesar("Invincible", 26);
        expect(actual).to.be.false;
    });

    it("should return fasle if shift is null/ not entered", () => {
        const actual = caesar("Invincible");
        expect(actual).to.be.false;
    });

    it("should return a word shifted by the requested amount", () => {
        const expected = 'lqylqfleoh';
        const acutal = caesar("invincible", 3);
        expect(acutal).to.equal(expected);
    });

    it("should return a word shifted without case sensitivity", () => {
        const expected = 'lqylqfleoh';
        const acutal = caesar("Invincible", 3);
        expect(acutal).to.equal(expected);
    });

    it("should loop back if shifted code > 122 (ascii 'z')", () => {
        const expected = 'c';
        const actual = caesar('z', 3);
        expect(actual).to.equal(expected);
    });

    it("should decode the message if encode set to false", () => {
        const expected = 'invincible';
        let actual = caesar('lqylqfleoh', 3, false);
        expect(actual).to.equal(expected);
    });

    it("should maintain any spaces in the center", () => {
        const expected = 'lpdjh frplfv'
        const actual = caesar('image comics', 3);
        expect(actual).to.equal(expected);
    });

    it("should maintain any punctuation or chars that aren't letters", () => {
        const expected = 'lpdjh frplfv!'
        const actual = caesar('image comics!', 3);
        expect(actual).to.equal(expected);
    });

    it("should be allowed to shift in the opposite direction", () => {
        const expected = 'fjxdb zljfzp!'
        const actual = caesar('image comics!', -3);
        expect(actual).to.equal(expected);
    });
});