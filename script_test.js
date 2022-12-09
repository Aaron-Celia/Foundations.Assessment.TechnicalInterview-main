// --------------------------
//#region Setup
// You can safely ignore the code in this region :)
// --------------------------
// This line of code uses Chai, which is our assertion library.
const { expect } = require("chai");

// This imports your code so we can test it!
const code = require("./script.js");

// Helpers to generate random test cases
// Don't worry about how this works for now :)
function generateRandomInteger(low = -50, high = 50) {
  return low + Math.floor(Math.random() * (high - low + 1));
}
function generateRandomNumberArray(low = -50, high = 50, n = 5) {
  return Array.from({ length: n }, () => generateRandomInteger(low, high));
}
function generateRandomString(low = 1, high = 10) {
  const length = generateRandomInteger(low, high);
  const charCodes = generateRandomNumberArray(97, 122, length);
  return String.fromCharCode(...charCodes);
}
//#endregion Setup

describe("exclaim", function () {
  describe("works with correct types", function () {
    it("is a function", function () {
      expect(code.exclaim).to.be.a("function");
    });

    it("returns a string", function () {
      const result = code.exclaim("");
      expect(result).to.be.a("string");
    });
  });

  describe("returns the correct output", function () {
    it('returns "error" if the argument is not a string', function () {
      expect(code.exclaim(928)).to.equal("error");
    });

    it("returns '!' when the argument is an empty string", function () {
      const result = code.exclaim("");
      expect(result).to.equal("!");
    });

    // Generate and test 3 random strings
    for (let i = 0; i < 3; i++) {
      const test = generateRandomString();
      const expected = test + "!";
      it(`returns ${expected} for ${test}`, function () {
        expect(code.exclaim(test)).to.equal(expected);
      });
    }
  });
});

describe("getAreaOfTrapezoid", function () {
  describe("works with correct types", function () {
    it("is a function", function () {
      expect(code.getAreaOfTrapezoid).to.be.a("function");
    });

    it("returns a number", function () {
      const result = code.getAreaOfTrapezoid(1, 2, 3);
      expect(result).to.be.a("number");
    });
  });

  describe("returns the correct output", function () {
    it('returns "error" if any of the arguments is not a number', function () {
      expect(code.getAreaOfTrapezoid("3", 3, 3)).to.equal("error");
      expect(code.getAreaOfTrapezoid("3", "3", 3)).to.equal("error");
      expect(code.getAreaOfTrapezoid("3", "3", "3")).to.equal("error");
      expect(code.getAreaOfTrapezoid(3, "3", 3)).to.equal("error");
      expect(code.getAreaOfTrapezoid(3, "3", "3")).to.equal("error");
      expect(code.getAreaOfTrapezoid(3, 3, "3")).to.equal("error");
    });

    it('returns "error" if any of the arguments is nonpositive', function () {
      expect(code.getAreaOfTrapezoid(-3, -3, -3)).to.equal("error");
      expect(code.getAreaOfTrapezoid(0, 0, 0)).to.equal("error");
      expect(code.getAreaOfTrapezoid(-3, 0, -3)).to.equal("error");
    });

    // Generate and test 3 trapezoids
    for (let i = 0; i < 3; i++) {
      const a = generateRandomInteger(1, 10);
      const b = generateRandomInteger(1, 10);
      const h = generateRandomInteger(1, 10);
      const expected = ((a + b) * h) / 2;
      it(`returns ${expected} for the trapezoid: a=${a} b=${b} h=${h}`, function () {
        expect(code.getAreaOfTrapezoid(a, b, h)).to.equal(expected);
      });
    }
  });
});

describe("isStringTooLong", function () {
  describe("works with correct types", function () {
    it("is a function", function () {
      expect(code.isStringTooLong).to.be.a("function");
    });

    it("returns a boolean", function () {
      const result = code.isStringTooLong("kitten");
      expect(result).to.be.a("boolean");
    });
  });

  describe("returns the correct output", function () {
    it('returns "error" if the given argument is not a string', function () {
      expect(code.isStringTooLong(1092)).to.equal("error");
    });

    it("returns false when a string is not too long", function () {
      const result = code.isStringTooLong("kitten");
      expect(result).to.equal(false);
    });

    it("returns true when a string is too long", function () {
      const result = code.isStringTooLong(
        "Sphinx of black quartz, judge my vow."
      );
      expect(result).to.equal(true);
    });
  });
});

describe("alternateCaps", function () {
  describe("works with correct types", function () {
    it("is a function", function () {
      expect(code.alternateCaps).to.be.a("function");
    });

    it("returns a string", function () {
      const result = code.alternateCaps("fullstack");
      expect(result).to.be.a("string");
    });
  });

  describe("returns the correct output", function () {
    it('returns "error" if the given argument is not a string', function () {
      expect(code.alternateCaps(83716)).to.equal("error");
    });

    it("returns a string of the same length", function () {
      const result = code.alternateCaps("fullstack");
      expect(result).to.have.lengthOf("fullstack".length);
    });

    it("returns a string with the first letter lowercase", function () {
      const result = code.alternateCaps("FULLSTack");
      expect(result[0]).to.equal("f");
    });

    it("returns a string with alternating caps", function () {
      const result = code.alternateCaps("Poestaysposthaste");
      expect(result).to.equal("pOeStAySpOsThAsTe");
    });
  });
});

describe("reverse", function () {
  describe("works with correct types", function () {
    it("is a function", function () {
      expect(code.reverse).to.be.a("function");
    });

    it("returns an array", function () {
      const result = code.reverse([1, 2, 3]);
      expect(result).to.be.an("array");
    });
  });

  describe("returns the correct output", function () {
    // Generate and test 3 random arrays
    for (let i = 0; i < 3; i++) {
      const test = generateRandomNumberArray();
      const expected = Array.from(test);
      expected.reverse();
      expect(code.reverse(test)).to.eql(expected);
    }
  });
});

describe("getMostVowels", function () {
  describe("works with correct types", function () {
    it("is a function", function () {
      expect(code.getMostVowels).to.be.a("function");
    });
    it("returns a string", function () {
      const result = code.getMostVowels("vowels");
      expect(result).to.be.a("string");
    });
  });

  describe("returns the correct output", function () {
    it('returns "error" if the given argument is not a string', function () {
      expect(code.getMostVowels(638201)).to.equal("error");
    });

    it("returns the word with the most vowels", function () {
      const result = code.getMostVowels("I am a keeper with some real rhythms");
      expect(result).to.equal("keeper");
    });

    it("returns empty string when there are no vowels", function () {
      const result = code.getMostVowels("try my gym");
      expect(result).to.equal("");
    });
  });
});

describe("createMultiplicationTable", function () {
  describe("works with correct types", function () {
    it("is a function", function () {
      expect(code.createMultiplicationTable).to.be.a("function");
    });

    it("returns an array ", function () {
      const result = code.createMultiplicationTable(1, 4);
      expect(result).to.be.an("array");
    });
  });
  
  describe("returns the correct output", function () {
    it('returns "error" if either of the given arguments is not a number', function () {
      expect(code.createMultiplicationTable("3", 5)).to.equal("error");
      expect(code.createMultiplicationTable("3", "5")).to.equal("error");
      expect(code.createMultiplicationTable(3, "5")).to.equal("error");
    });

    it("returns an empty array if either argument is 0", function () {
      expect(code.createMultiplicationTable(0, 1)).to.eql([]);
      expect(code.createMultiplicationTable(0, 0)).to.eql([]);
      expect(code.createMultiplicationTable(1, 0)).to.eql([]);
    });

    // Generate and test 3 random tables
    for (let i = 0; i < 3; i++) {
      // Don't worry about how these test cases are generated for now :)
      const rows = generateRandomInteger(1, 10);
      const cols = generateRandomInteger(1, 10);
      const expected = Array.from({ length: rows }, (_, r) =>
        Array.from({ length: cols }, (_, c) => (r + 1) * (c + 1))
      );

      it(`builds the correct ${rows}x${cols} table`, function () {
        expect(code.createMultiplicationTable(rows, cols)).to.eql(expected);
      });
    }
  });
});
