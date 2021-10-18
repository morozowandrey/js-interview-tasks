// The task: after running this code, `counter` should be 5

(() => {
  let counter = 0;

  function foo() {
    console.log('a');
    console.log('b');
    console.log('c');
  }

  function bar() {
    foo();
    console.log('d');
    console.log('e');
  }

  bar()

  console.log(counter);
})();


// SOLUTION is to redefine log method
(() => {
  let counter = 0;
  let originalLog = console.log

  function logExtended(...param) {
    originalLog(...param);
    counter++
  }

  console.log = logExtended

  function foo() {
    console.log('a');
    console.log('b');
    console.log('c');
  }

  function bar() {
    foo();
    console.log('d');
    console.log('e');
  }

  bar()

  console.log(counter);
})();
