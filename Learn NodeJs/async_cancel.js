function orderFood(menu, { signal }) {
    //random delay between 1 until 10 seconds
    const delay = Math.floor(Math.random() * 10000) + 1000;

    return new Promise((resolve, reject) => {
        const timeoutId = setTimeout(() => {
            resolve(`Ini ${menu} pesanananmu`);
        }, delay);


        //cancel the timeout when signal is aborted and reject the promise
        signal.addEventListener('abort', () => {
            clearTimeout(timeoutId);
            reject(new Error('Pesanan dibatalkan'));
        });
    });
}

//app.js

const { orderFood } = require('async_cancel');

(async() => {
    const abortController = new AbortController();

    // abort the request after 5 seconds
    setTimeout(() => abortController.abort(), 5000);

    const result = await orderFood('nasi goreng', { signal: abortController.signal });
    console.log(result);
})();