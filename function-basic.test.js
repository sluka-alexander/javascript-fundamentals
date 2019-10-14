describe("Function basic", () => {
  it("Should be function declarations", () => {

    function s() {
      return "I am a function declarations";
    }
    expect(s()).toBe("I am a function declarations");
  });

  it("Should be function expression", () => {

    let func = function() {
      return "I am a function expression";
    };

    expect(func()).toBe("I am a function expression");
  });

  it("Should get sum of 2 numbers", () => {
    function sum(a,b){
      return a+b;
    }

    expect(sum(5,7)).toBe(12);
    expect(sum(10,1000)).toBe(1010);
    expect(sum(-10,10)).toBe(0);
  });

  test("Should get arguments length", () => {
    // TODO: Declare 3 functions (withoutArguments, withOneArgument, withTwoArguments ) with different quantity of named arguments
    function withoutArguments(){
      return arguments.length;
    }
    function withOneArgument(){
      return arguments.length;
    }
    function withTwoArguments(){
      return arguments.length;
    }
    function withFourArguments(){
      return arguments.length;
    }

    expect(withoutArguments()).toBe(0);
    expect(withOneArgument(1)).toBe(1);
    expect(withTwoArguments(1, 2)).toBe(2);
    expect(withTwoArguments(1)).toBe(1);
    expect(withFourArguments(1, 2, 3, 4, 5)).toBe(5);
  });

  test("Should find argument at N position", () => {
    // Write function fn. First argument should be position (N) of argument
    function fn(index){
      return arguments[index];
    }
    expect(fn(1)).toBe(undefined);
    expect(fn(1, "a")).toBe("a");
    expect(fn(3, "a", "b")).toBe(undefined);
    expect(fn(1, "a", "b", "c")).toBe("a");
    expect(fn(2, "a", "b", "c")).toBe("b");
    expect(fn(3, "a", "b", "c")).toBe("c");
  });

  it("Should return string of wrapped arguments", () => {
    function wrap() {
      let result = '';
      for (let i = 0; i< arguments.length; i++) {
        result +="|" + arguments[i];
      }
      return result + "|";
    }
    expect(wrap("a", "b")).toBe("|a|b|");
    expect(wrap("a", "b", "c", "d", "e")).toBe("|a|b|c|d|e|");
  });

  test("Should use Function as argument", () => {
      function add10(){
        return 10
    }
    function mul3(){
        return 3
    }
    function logCalculationResult(f, num){
        if(f == add10){ return "Result is " + (f()+ num);}
        else if(f == mul3){ return "Result is " + (f()* num);}
    }
    expect(logCalculationResult(add10, 7)).toBe("Result is 17");
    expect(logCalculationResult(mul3, 7)).toBe("Result is 21");
  });
});
