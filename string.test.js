describe("Strings", () => {
  it("Should join two strings with a space.", () => {
    // TODO: write 2 function with different way for join string
    function combine1(a,b){
      return arguments[0] + " " + arguments[1];
    }
    function combine2(){
      let a = arguments[0];
      return a.concat(" " + arguments[1]);
    }
    expect(combine1("hello", "world")).toBe("hello world");
    expect(combine2("hello", "world")).toBe("hello world");
  });

  it("Should get string length", () => {
    function getLength(a){
      return arguments[0].length;
    }
    expect(getLength("")).toBe(0);
    expect(getLength("word")).toBe(4);
  });

  it("Should create greeting message from template", () => {
    function greeting(){
      return "Hello, " + arguments[0] + "!";
    }
    expect(greeting("Ivan")).toBe("Hello, Ivan!");
  });

  it("Should strip leading and trailing spaces from a string", () => {
    expect(' aaaa bbb   '.replace(/\s*$/,'').replace(/^\s*/,'')
  ).toBe("aaaa bbb");
  });

  it("Replace all word occurence in the sentences", () => {

    expect('aaa bbb ccc aaa bb'.replace(/aaa/g, "eeeee")).toBe(
      "eeeee bbb ccc eeeee bb"
    );
  });

  it("Should validate string length", () => {
    function validateLength(a,b,c){
      if(arguments[0].length >= arguments[1] && arguments[0].length <= arguments[2]){
        return true;
      }
      else {
        return false;
      }
    }
    expect(validateLength('abcde', 1, 5)).toBe(true);
    expect(validateLength('a', 1, 5)).toBe(true);
    expect(validateLength('ab', 1, 5)).toBe(true);
    expect(validateLength('', 1, 5)).toBe(false);
    expect(validateLength('abcdef', 1, 5)).toBe(false);
  });

  it("Should do case insensitive strings comparison", () => {
    function compare(a,b){
      a = a.toUpperCase();
      b = b.toUpperCase();
      return a == b;
    }
    expect(compare('aBc', 'ABC')).toBe(true);
    expect(compare('abc','abc')).toBe(true);
  });

  it("Should trim string according symbols limit", () => {
    function trim(a, b){
      return a.substr(0, b).replace(/\s*$/,'');
    }

    expect(trim('Lorem ipsum dolor sit amet', 7)).toBe("Lorem i");
    expect(trim('Lorem ipsum dolor sit amet', 12)).toBe("Lorem ipsum");
    expect(trim('Lorem ipsum dolor sit amet', 11)).toBe("Lorem ipsum");
    expect(trim('Lorem ipsum dolor sit amet', 100)).toBe(
      "Lorem ipsum dolor sit amet"
    );
  });
});
