function fetchData(url, cb) {
  setTimeout(() => {
    console.log('cb', url);
    cb(url);
  });
}

const cb = (data1) => {
  //
  //
  //
  //
  // if () {}
  const cb2 = (data2) => {
    fetchData('example.com/3', (data3) => {
      fetchData('example.com/4', (data4) => {});
    });
  };
  fetchData('example.com/2', cb2);
};
// callback hell
fetchData('example.com/1', cb);

// Promise
/**
 * 三种状态
 * pending resolved(fulfilled) rejected
 *
 * 状态不可逆
 * pending -> resolved
 * pending -> rejected
 *
 *
 */
// resolve
// reject
// const promise = new Promise((res, rej) => {
//   res([]);
//   // rej({})
// })

// // promise chain
// promise.then((data) => {
//   // data = [];

//   return {};
//   // return new Promise() // async call
// }).then(() => {

// }).catch((err) => {
//   // err = {}
//   return {}; // promise
// }).then().catch()

function fetchDataPromise(url) {
  return new Promise((res, rej) => {
    // setTimeout(() => {
    console.log('promise', url);
    rej(url);
    // if () {
    // rej()
    // }
    // });
  });
}

const isLoading = false;

isLoading = true;
const promise = fetchDataPromise('example.com/1');
promise
  .then((data1) => {
    return fetchDataPromise('example.com/2');
  })
  .then((data2) => {
    return fetchDataPromise('example.com/3');
  })
  .then((data3) => {
    return fetchDataPromise('example.com/4');
  })
  .then((data4) => {
    return fetchDataPromise('example.com/5');
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    isLoading = false;
  });

// promise queue / micro task queue
// macro task queue
// [p2], [cb1]

// async await
// syntax sugar

async function main() {
  // fetchDataPromise().then().then()
  try {
    //
    const result = await fetchDataPromise();
    //
    const result2 = await fetchDataPromise();
  } catch (e) {
    console.log(e);
  } finally {
  }
  // ...
}

main();
// (async () => {
//   const result = await fetchDataPromise();
// })()
