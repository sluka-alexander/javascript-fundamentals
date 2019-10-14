describe("Numbers", () => {
  it("Should use remainder operator '%' ", () => {
    const a = 15;
    const b = 10;

    expect(a%b).toBe(5);
    expect(b%b).toBe(0);
  });

  test("Should get average of 3 numbers", () => {
    function average(){
      let sum = 0;
      for (let i = 0; i < arguments.length; i++){
        sum+=arguments[i]
      }
      return (sum / arguments.length);
    }
    expect(average(2, 4, 6)).toBe(4);
    expect(average(-5, 12, -7)).toBe(0);
  });

  test("Should get a last digit of the number", () => {
    function last(num) {
      let arrayOfDigits = Array.from(String(num), Number);
      let lastPosition = arrayOfDigits.length - 1;
      return arrayOfDigits[lastPosition];
    }
    expect(last(123)).toBe(3);
    expect(last(3982)).toBe(2);
  });

  test("Should sum the digits of a given number", () => {
    function sumDigits(num) {
      let arrayOfDigits = Array.from(String(num), Number);
      let sum = 0;
      for (let i=0; i < arrayOfDigits.length; i++) {
        sum += arrayOfDigits[i];
      }
      return sum;
    }
    expect(sumDigits(123)).toBe(6);
    expect(sumDigits(53)).toBe(8);
  });

  test("Should return true if specified number is prime", () => {
    function isPrime(num) {
      for(let i = 2; i < num; i++)
        if(num % i === 0) return false;
      return num > 1;
    }
    expect(isPrime(7)).toBe(true);
    expect(isPrime(4)).toBe(false);

    // TODO: Write additional tests
  });

  test("Should convert string to number", () => {
    function convert(a){
      return Number(a);
    }
    expect(convert('234')).toBe(234);
  });

  test("Should find highest value", () => {
    // TODO: Write 2 functions max and max2. Only one of them should use Math
    function max(){
      return Math.max.apply(null, arguments)
    }

    function max2() {
      let arr = arguments;
      let largest = arr[0];
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
          largest = arr[i];
        }
      }
      return largest;
    }
    expect(max(1, 2)).toBe(2);
    expect(max2(1, 7, 2, 8, 5)).toBe(8);
  });

  test("Should find lowest value", () => {

    function min(){
      return Math.min.apply(null, arguments)
    }

    function min2() {
      let arr = arguments;
      let largest = arr[0];
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] < largest) {
          largest = arr[i];
        }
      }
      return largest;
    }
    expect(min(2, 3, 9, 4, 1, 5)).toBe(1);
    expect(min2(2, 3, 9, 4, 1, 5)).toBe(1);
    // TODO: Write additional tests
  });

  test("Should round up a value to the nearest integer", () => {
    expect(Math.round(1.2)).toBe(1);
    expect(Math.round(1.8)).toBe(2);
    expect(Number(1.2.toFixed())).toBe(1);
    expect(Number(-1.2.toFixed())).toBe(-1);
  });

  test("Should get the largest integer less than or equal to a given number.  ", () => {
    expect(Math.floor(1)).toBe(1);
    expect(Math.floor(1.8)).toBe(1);
    expect(parseInt(1.8)).toBe(1);

    // TODO: Write additional tests
  });

  test("Should return the base10 representation of a binary string", function() {
    expect(parseInt( "11000000", 2 )).toBe(192);
  });

  test("Should convert an eight-bit string number to a binary string", function() {
    expect(parseInt( "127", 8 ).toString(2)).toBe("1010111");
    expect(parseInt( "65", 8 ).toString(2)).toBe("110101");
  });
});
