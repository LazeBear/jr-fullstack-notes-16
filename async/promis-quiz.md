1

```js
setTimeout(() => console.log(1));
Promise.resolve().then(() => console.log(2));
setTimeout(() => {
  console.log(3);
  Promise.resolve().then(() => console.log(3.1));
});
setTimeout(() => console.log(4));
Promise.resolve().then(() => {
  console.log(5);
  Promise.resolve().then(() => console.log(5.1));
  setTimeout(() => console.log(5.2));
});
Promise.resolve().then(() => console.log(6));
```

2

```js
Promise.resolve().then(() => console.log(1));
Promise.resolve().catch(() => console.log(2));
Promise.resolve()
  .then(() => console.log(3))
  .then(() => console.log(3.1));
Promise.reject().catch(() => console.log(4));
Promise.resolve()
  .then(() => console.log(5))
  .catch(() => console.log(5.1));
Promise.resolve()
  .catch(() => console.log(6))
  .then(() => console.log(6.1));
Promise.reject()
  .then(() => console.log(7))
  .catch(() => console.log(7.1));
Promise.reject()
  .catch(() => console.log(8))
  .then(() => console.log(8.1));
```

3

```js
setTimeout(() => console.log(1));
new Promise((res, rej) => {
  console.log(2);
  setTimeout(() => console.log(2.1));
  res();
}).then(() => console.log(2.2));
setTimeout(() => {
  console.log(3);
  new Promise((res, rej) => {
    console.log(3.1);
    setTimeout(() => console.log(3.2));
    rej();
  })
    .then(() => console.log(3.3))
    .catch(() => console.log(3.4));
});
Promise.resolve().then(() => console.log(4));
setTimeout(() => {
  console.log(5);
  setTimeout(() => console.log(5.1));
  Promise.resolve().then(() => {
    setTimeout(() => console.log(5.2));
    console.log(5.3);
  });
});
```

4

```js
async function foo() {
  console.log(1);
  await bar();
  console.log(2);
}

async function bar() {
  console.log(3);
  const a = await 4;
  console.log(a);
}

console.log(5);
foo();
console.log(6);
```
