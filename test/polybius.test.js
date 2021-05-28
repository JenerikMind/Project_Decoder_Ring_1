const expect = require("chai").expect;
const polybius = require("../src/polybius").polybius;


describe("Polybius square", () => {
    it("should return a string", () => {
        actual = polybius("a");
        expect(actual).to.be.a("string");
    });

    it("should return '11' for a", () => {
        expected = '11';
        actual = polybius("a");
        expect(actual).to.equal(expected);
    });

    it("should return '11' for ' A  '", () => {
        expected = '11';
        actual = polybius(" A  ");
        expect(actual).to.equal(expected);
    });

    it("should return i as 42", () => {
        expected = '42';
        actual = polybius('i');
        expect(actual).to.equal(expected);
    });

    it("should return j as 42", () => {
        expected = '42';
        actual = polybius('j');
        expect(actual).to.equal(expected);
    });

    it("should decode 42 as i/j", () => {
        expected = '42';
        actual = polybius('i');
        expect(actual).to.equal(expected);
    });

    it("should return 'message' as '23513434112251'", () => {
        expected = "23513434112251";
        actual = polybius('message');
        expect(actual).to.equal(expected);
    });

    it("should return 'A Message' as '11 23513434112251'", () => {
        expected = "11 23513434112251";
        actual = polybius('A Message');
        expect(actual).to.equal(expected);
    });
});