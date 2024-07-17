//built in class bawaan javascript seperti Date, Object, Array, Math, dan String


//pure function
const hitungLuasLingkaran = (jariJari) => {
    return 3.14 * (jariJari * jariJari);
}


//impure function
let PI = 3.14;

const hitungLuasLingkaran2 = (jariJari) => {
    return PI * (jariJari * jariJari);
}


const createPersonWithAge = (age, person) => {
    return {...person, age };
};

const person = {
    name: 'Bobo'
};

const newPerson = createPersonWithAge(18, person);

console.log({
    person,
    newPerson
});

/**
 * Output:
 *  { 
 *    person: { name: 'Bobo' },
 *    newPerson: { name: 'Bobo', age: 18 } 
 *  }
 */

//immutability
//objek tidak boleh diubah setelah objek tersebut dibuat
const names = ['haryy', 'Ron', 'Jeff'];

const newNamesWithExcMark = names.map((name) => `${name}!`);
console.log({
    names,
    newNamesWithExcMark,
});


// * {
// names: [ 'Harry', 'Ron', 'Jeff', 'Thomas' ],
// newNamesWithExcMark: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
// }
// */

//mengubah nilai return dalam objek baru
const user = {
    firstname: 'Harry',
    lastName: 'Protter', // ups, typo!
}

const createUserWithNewLastName = (newLastName, user) => {
    return {...user, lastName: newLastName }
}

const newUser = createUserWithNewLastName('Potter', user);

console.log(newUser);

/**
 * output:
 * { firstname: 'Harry', lastName: 'Potter' }
 * 
 */