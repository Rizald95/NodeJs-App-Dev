//Parameter dan Argument
//Parameter merupakan variabel yang di definisikan sebagai input dari sebuah fungsi

function multiply(a, b) {
    return a * b;
}


//Argument merupakan nilai atau expression yang dimasukan ke dalam fungsi
multiply(3, 4);

const user = {
    id: 24,
    displayName: 'Kren',
    fullname: 'kylo',
};

function introduce({ displayName, fullname }) {
    console.log(`${displayName} is ${fullname}`);
}

introduce(user);


//Default Parameters
//