const PUT_ANSWER_HERE = Symbol();

describe('Objects', () => {
  it('Should get the value at path of object. If the resolved value is undefined, the defaultValue is returned in its place.', () => {
      function get(obj, path) {
          if(path.includes('.')){
              const separatedPath = path.split('.');
              return separatedPath.reduce((newPath, currentPath) => newPath[currentPath], obj);
          }
          else {
              return obj[path];
          }
      }

    expect(get({ a: { b: { c: 3 } } }, 'a')).toStrictEqual({ b: { c: 3 } });
    expect(get({ a: { b: { c: 3 } } }, 'a.b.c')).toBe(3);
    expect(get({ a: { b: { c: 1, d: 2 } } }, 'a.b')).toStrictEqual({
      c: 1,
      d: 2
    });
  });

  it('Creates an object composed of the picked object properties.', () => {
    function pick(obj, props) {
      let new_Object = {};
      props.forEach(i => {
        new_Object[i] = obj[i];
      })
      return new_Object;
    }
    const object = { a: 1, b: '2', c: 3 };

    expect(pick(object, ['a', 'c'])).toStrictEqual({ a: 1, c: 3 });
    expect(pick(object, ['c'])).toStrictEqual({ c: 3 });
  });

  it('Should clone object', () => {
    const person1 = {
      firstName: 'Ivan',
      secondName: 'Ivanov'
    };

    const person2 = Object.assign({}, person1);
    person2.firstName += ' Jr.';
    const person3 = JSON.parse(JSON.stringify(person1));

    expect(person1.firstName).toBe('Ivan');
    expect(person2.firstName).toBe('Ivan Jr.');
    expect(person2.secondName).toBe('Ivanov');
    expect(person3.secondName).toBe('Ivanov');
  });

  it('Performs a shallow comparison between two values to determine if they are equivalent.', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 2 };
    const obj3 = { a: 1, b: 4 };

    function compare(first, second){
      let er = JSON.stringify(first) === JSON.stringify(second);
      return  er;
    }

    expect(compare(obj1, obj2)).toBe(true);
    expect(compare(obj1, obj3)).toBe(false);
  });

  it('Performs a deep comparison between two values to determine if they are equivalent.', () => {
    const obj1 = { a: 1, b: { a: 2 } };
    const obj2 = { a: 1, b: { a: 2 } };

    function compare(first, second){
       return JSON.stringify(first) === JSON.stringify(second);
    }

    expect(compare(obj1, obj2)).toBe(true);
  });

  it('Fix me', () => {
    function hasAccess(role) {
      if (role.type == 'admin') {
        return true;
      } else {
        return false;
      }
    }

    expect(hasAccess({ type: 'admin' })).toBe(true);
    expect(hasAccess({ type: 'anonymous' })).toBe(false);
  });
});
