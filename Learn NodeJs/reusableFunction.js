//beberapa Higher Order Function yang dimiliki array, seperti map, filter, dan forEach

//Array Map
//fungsi map akan mengembalikan array baru. nilai tiap item pada array yang dikembalikan
//dihasilkan dari kembalian callback function-Nya
//krena callback function dapat mengakses item array, biasanya developer menggunakannya untuk menghasilkan nilai baru

const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => { return `${name}!` });

console.log(newArray);

/**
 * [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
 * 
 */

//Array Filter
//filter terhadap nilai array yang ada
const students = [{
        name: 'Harry',
        score: 60,
    },
    {
        name: 'James',
        score: 88,
    },
    {
        name: 'Ron',
        score: 90,
    },
    {
        name: 'Bethy',
        score: 75,
    }
];

const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);

console.log(eligibleForScholarshipStudents);

const findJames = students.find(student => student.name === 'James');
console.log(findJames);

/**
 * output:
 * [ { name: 'James', score: 88 }, { name: 'Ron', score: 90 } ]
 * 
 */


//Array some
arr.some(callback(element, [index], [array]), [thisArg])
    // [...] adalah opsional parameter