# inventory Manager 

## project goal

I started this project with the purpose of learning Angular and java Spring boot in my free time

## is it ok to use the code ?

yeah this code is available to use , feel free to !

## Learning journey 

I documented the new notions I learn in a notion page :
https://romantic-stamp-7fe.notion.site/Angular-JS-cf5e4199642c4ca285baadea38fb3c17

or you can directly read this ReadMe :
--------------------------------------------------------------------------------------------------------
# TypeScript
## Basics
### Compiled
Typescript will be transformed to js so it can be runed , when we run tsc command , js files will be genreated 

### Types

in pure JavaScript we can have something like :
```tsx
function fn(x) {
  return x.flip();
}
```
the same sample in typescript will print :
```tsx
const message = "hello!";
 
message();
This expression is not callable.
  Type 'String' has no call signatures.
```




we can declare a variable to be etiher String or number by : 

```tsx
var: string | number ;
```

we can see in the following example that an object can use the union of 2 interface’s :

```tsx
interface Pointlike {
  x: number;
  y: number;
}
interface Named {
  name: string;
}
 
function logPoint(point: Pointlike) {
  console.log("x = " + point.x + ", y = " + point.y);
}
 
function logName(x: Named) {
  console.log("Hello, " + x.name);
}
 
const obj = {
  x: 0,
  y: 0,
  name: "Origin",
};
 
logPoint(obj);
logName(obj);
```

**The relationship between types is by the properties they contain**

```tsx
class Empty {}
 
function fn(arg: Empty) {
  // do something?
}
 
// No error, but this isn't an 'Empty' ?
fn({ k: 10 });
```

here there is no error because typescript checks if the object { k: 10 } contains the properties contained in the Empty class , it does because the Empty class dosn’t contain any propertie .

```tsx
class Car {
  drive() {
    // hit the gas
  }
}
class Golfer {
  drive() {
    // hit the ball far
  }
}
// No error?
let w: Car = new Golfer();
```

the same applies with methods

