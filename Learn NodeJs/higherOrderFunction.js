//fungsi pada javascript dapat diperlakukan layaknya sebuah data.
//menyimpan function dalam variabel , memberikan function sebagai parameter pada fungsi lainnya
//hingga mengembalikan function di dalam function


const hello = () => {
    console.log('Hello')
};

const say = (someFunction) => {
    someFunction();
}

const sayHello = () => {
    return () => {
        console.log('Hello');
    }
}


hello();
say(hello);
sayHello()();

/**
 * Hello!
 * Hello!
 * Hello!
 */

//teknik Higher-order function digunakan untuk
//mengabstraksi atau mengisolasi sebuah aksi, event, atau menangani alur asynchronous menggunakan callback,  promise, dan lainya

const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const arrayMap = (arr, action) => {
    const loopTrough = (arr, action, newArray = [], index = 0) => {
        const item = arr[index];
        if (!item) return newArray;
        return loopTrough(arr, action, [...newArray, action(arr[index])], index + 1);
    }

    return loopTrough(arr, action);
}


const newNames = arrayMap(names, (name) => `${name}!`);

console.log({
    names,
    newNames,
});

/**
 * output:
 * {
 *   names: [ 'Harry', 'Ron', 'Jeff', 'Thomas' ],
 *   newNames: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
 * }
 */