describe("Data types", () => {
  describe("Boolean", () => {
    it("Should define False and True boolean variables", () => {
      let a = false;
      let b = true;
      expect(a).toBeFalsy();
      expect(typeof(a)).toBe("boolean");
      expect(b).toBeTruthy();
      expect(typeof(b)).toBe("boolean");
    });

    it("Should use different logical operators with 2 boolean operands", () => {
      const FALSE = false;
      const TRUE = true;

      let useLogicalAnd = FALSE && TRUE;
      let useLogicalOr = FALSE || TRUE;
      let useLogicalNot = !FALSE;
      let useDoubleLogicalNot = !!FALSE;

      expect(useLogicalAnd).toBe(false);
      expect(useLogicalOr).toBe(true);
      expect(useLogicalNot).toBe(true);
      expect(useDoubleLogicalNot).toBe(false);
    });

    it("Should use different logical operators with at least 3 boolean operands", () => {
      const a = false;
      const b = false;
      const c = true;
      const d = true;

      let cond1 = (a || c) && d;
      let cond2 = (a && b) || d;
      let cond3 = !c;
      let cond4 = !!b;

      expect(cond1).toBe(true);
      expect(cond2).toBe(true);
      expect(cond3).toBe(false);
      expect(cond4).toBe(false);
    });
  });

  describe("Number", () => {
    it("Should define different numbers", () => {
      let a = 10;
      let b = Infinity;
      let c = 20.2;
      let d = -Math.pow(2,53)-1;
      let nan = NaN;

      expect(a).toBe(10);
      expect(!Number.isFinite(b)).toBe(true);
      expect(c).toBeGreaterThan(20);
      expect(c).toBeLessThan(21);
      expect(d).toBeLessThan(0);
      expect(nan).toBeNaN();
    });

    it("Should use base operators", () => {
      const a = 10;
      const b = 30;

      expect(a + b).toBe(40);
      expect(a - b).toBe(-20);
      expect(b - a).toBe(20);
      expect(b * a).toBe(300);
      expect(b / a).toBe(3);
      expect(a / b).toBeCloseTo(0.333);
    });

    it("Should combine base operators", () => {
      const a = 10;
      const b = 30;
      const c = 100;

      expect(a + b + c).toBe(140);
      expect(b * a + c).toBe(400);
      expect((b * c) - (c * a)).toBe(2000);
      expect(b * c + b * a).toBe(3300);
      // TODO: write 3 own test
    });

    it("Should convert to number", () => {
      expect(Number("123")).toBe(123);
      expect(Number("12.3")).toBe(12.3);

      expect(Number("12")).toBe(12);
      expect(Number("12.3")).toBe(12.3);
      expect(Number("0")).toBe(0);
      expect(Number(null)).toBe(0);
      expect(Number("0b11")).toBe(3);
      expect(Number("foo")).toBe(NaN);
      expect(Number("Number"/ 2)).toBe(NaN);
      expect(Number("-Infinity")).toBe(Number.NEGATIVE_INFINITY);
    });
  });

  describe("String, object, null, undefined and symbols", () => {
    it("String", () => {
      let str1 = 'string'; // Use single quote
      let str2 = String("string"); // Use String(???)
      let str3 =new String("string") ; // Use new String(???)
      let str4 = `string` ; // Use template string and str1 variable

      expect(str1).toBe("string");
      expect(str1 === str2).toBeTruthy();
      expect(str1 === str3).toBeFalsy();
      expect(str1 === str4).toBeTruthy();
      expect(typeof (null)).toBe("object");
    });

    it("Should define object with 2 props", () => {
      let obj = {a : 2, b : 5}; // Define object with 2 props

      expect(typeof obj).toBe("object");
      expect(Object.keys(obj).length).toBe(2);

      // TODO: write 2 own tests
    });

    it("Should define variable with Null and undefined values", () => {
      let nullVar = null; // Set null
      let undefinedVar = undefined; // Set undefined
      let someVar; // Do not define it!!!

      expect(nullVar).toBeNull();
      expect(undefinedVar).toBe(undefinedVar);
      expect(someVar).toBe(undefined);
      expect(typeof (nullVar)).toBe("object");
      expect(typeof (undefinedVar)).toBe("undefined");
    });

    it("Should define 2 Symbol variable with the same description", () => {
      const smbl1 = Symbol("test");
      const smbl2 = Symbol("test");

      expect(typeof smbl1).toBe("symbol");
      expect(typeof smbl2).toBe("symbol");
      expect(smbl1 == smbl2).toBe(false);
    });
  });
});
