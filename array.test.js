describe('Array', () => {
  it('Should find the position of the first occurrence', () => {
    const arr1 = [1, 5, 8, 3, 2];
    expect(arr1.indexOf(5)).toBe(1);
    expect(arr1.indexOf(8)).toBe(2);

    // TODO: Write additional its
  });

  it('Should return the specified array twice', () => {
    function double(a){
      return a.concat(a);
    }
    expect(double([1, 2, 3])).toStrictEqual([1, 2, 3, 1, 2, 3]);
    expect(double([3, 4, 5])).toStrictEqual([3, 4, 5, 3, 4, 5]);

    // TODO: Write additional its
  });

  it('Convert the number array to  the array of string values', () => {
    function convertToStringArr(...arg){
      return arg[0].map(str => String(str));
    }
    expect(convertToStringArr([1, 2, 3])).toStrictEqual(['1', '2', '3']);

    // TODO: Write additional its
  });

  it('Should return the number of all occurrences of specified item in an array', () => {
    function calculateOccurences(a, b){
      let arr = a;
      return arr.filter(x => x == b).length
    }
    expect(calculateOccurences([1, 2, 1, 4, 1], 1)).toBe(3);
    expect(calculateOccurences([1, 2, 1, 4, 1], 4)).toBe(1);

    // TODO: Write additional its
  });

  it('Should convert strings from specified array to uppercase', () => {
    function func_toUppercase(...arg){
        return arg[0].map(elements => elements.toUpperCase());
    }
    expect(func_toUppercase(["aaaa", "abc"])).toStrictEqual(['AAAA', 'ABC']);
  });

  it('Insert an item at specified position', () => {
    function insert(arr, value, position){
      const removed = arr.splice(position, 0, value);
      return arr;
    }
    expect(insert([1, 2, 4], 3, 2)).toStrictEqual([1, 2, 3, 4]);
  });

  it('Should return the n last items from the specified array', () => {
    function last(arr, last_elements){
      return arr.slice(-last_elements);
    }
    expect(last([1, 2, 3, 4, 5, 6, 7], 3)).toStrictEqual([5, 6, 7]);
  });

  it('Return the 3 largest items from integer array', () => {
     function find3Largest(arr){
      let result = arr.slice();

      for(let i=0; i<=arr.length-4; i++){
        const min_element = result.indexOf(Math.min(...result))
        result.splice(min_element, 1)
      }

      return result;
    }
    expect(find3Largest([1, 3, 8, 3, 29, 11, 2, 17, 9, 1])).toStrictEqual(
      [29, 11, 17]);
  });

  it('Sort numbers array by using array method', () => {

    function bubble_sort(arr) {
      for (let i = 0, endI = arr.length - 1; i < endI; i++) {
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
          if (arr[j] < arr[j + 1]) {
            let swap = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = swap;
          }
        }
      }
      return arr;
    }

    function sort(arr){
      const new_arr = arr.sort( (a,b) => b - a);
      return arr;
    }
    expect(bubble_sort([2, 3, 1, 8, 4, 5])).toStrictEqual([8, 5, 4, 3, 2, 1]);
    expect(sort([2, 3, 1, 8, 4, 5] )).toStrictEqual([8, 5, 4, 3, 2, 1]);
  });


  it('Should summarize of all items of numbers array', () => {
    function sum_1(arr){
      let sum_arr = 0;
      for(let i=0; i<arr.length; i++){
        sum_arr += arr[i];
      }
      return sum_arr;
    }
    function sum_2(arr){
      return arr.reduce( (result,elem) => result+=elem )
    }
    expect(sum_1([1, 5, 7, 9, 3])).toBe(25);
    expect(sum_2([1, 5, 7, 9, 3])).toBe(25);
  });

  it('Should return the numbers of falsy value in the specified array', () => {
      function getNumberOfFalsy(arr) {
          return arr.map(i => !!i).filter(j => !j).length;
      }
    expect(getNumberOfFalsy([1, 0, "", null, "hello", "0"])).toBe(3);
  });

  it('Should return an array of unique items from the specified array', () => {
      function unique(arr){
          // return arr.sort()
          return arr.filter((value, index, self) =>  self.indexOf(value) === index)
      }
      function unique_set(arr){
          return [...new Set(arr)];
      }

    expect(unique(["a", "b", "a", "c", "e", "b", "o"])).toStrictEqual([
      'a',
      'b',
      'c',
      'e',
      'o'
    ]);
  expect(unique_set(["a", "b", "a", "c", "e", "b", "o"])).toStrictEqual([
      'a',
      'b',
      'c',
      'e',
      'o'
    ]);
  });

  it('Should return a map of grouped data by key and value selector', function() {

    const group = (arr, key) => {
      const findUniqueKeys = (arr, key) =>
          arr.reduce((sumArr, val) => sumArr.includes(val[key]) ? sumArr : sumArr.concat(val[key]), []);
      const unicKeys = findUniqueKeys(arr, key);
      return unicKeys.map(element => {
        const cityesObjects = arr.filter(value => value[key] === element);
        const cityesStrings = cityesObjects.map(element => element.city);
        return [element, cityesStrings]
      });
    }
    let arr = [
      { country: 'Belarus', city: 'Brest' },
      { country: 'Russia', city: 'Omsk' },
      { country: 'Russia', city: 'Samara' },
      { country: 'Belarus', city: 'Grodno' },
      { country: 'Belarus', city: 'Minsk' },
      { country: 'Poland', city: 'Lodz' }
    ];

    expect(group(arr, 'country')).toStrictEqual([
      ['Belarus', ['Brest', 'Grodno', 'Minsk']],
      ['Russia', ['Omsk', 'Samara']],
      ['Poland', ['Lodz']]
    ]);
  });

  it('Should creates an array with all falsy values removed.', () => {
      function compact(arr){
          return arr.filter(elem => !!elem)
      }
    expect(compact([1, 0, null, "a"])).toStrictEqual([1, 'a']);
  });

  it('Should flattens array a single level deep', () => {
      function flatten(arr){
        return arr.flat(1);
      }
    expect(flatten([1, [2, [3, [4]], 5]])).toStrictEqual([
      1,
      2,
      [3, [4]],
      5
    ]);
  });

  it('Should recursively flattens array.', () => {
    function flattenDeep(arr){
      return arr.flat(Infinity);
    }
    expect(flattenDeep([1, [2, [3, [4]], 5]])).toStrictEqual([
      1,
      2,
      3,
      4,
      5
    ]);
  });

  it('Should creates an array of unique values that are included in all given', () => {
    function intersection(array1, array2){
     return  array1.filter(value => -1 !== array2.indexOf(value))
    }
    expect(intersection([1, 2, 3, 4], [8, 3, 1, 0, 9])).toStrictEqual([
      1,
      3
    ]);
  });

  it('Should remove all elements from array that predicate returns truthy for and returns an array of the removed elements. The predicate is invoked with two arguments: (value, index).', () => {
    let arr = [1, 7, 5, 2, 8];
    const gt5 = v => v > 5;
    let removed = arr.filter(gt5);

    Array.prototype.remove = function(set){return this.filter(
        function(e,i,a){return set.indexOf(e)<0}
    )};
    arr = arr.remove(removed);

    expect(removed).toStrictEqual([7, 8]);
    expect(arr).toStrictEqual([1, 5, 2]);

  });
});