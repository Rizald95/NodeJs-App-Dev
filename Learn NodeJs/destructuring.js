//destructuring dalam javascript adalah
//sintaksis yang dapat mengeluarkan nilai dari array atau properties dari sebuah object ke dalam satuan kecil

const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}

const { firstName, lastName, age } = profile;
console.log(firstName, lastName, age);


// const profile = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 18
//   }

//   let firstName = "Dimas";
//   let age = 20;

//   // menginisialisasi nilai baru melalui destructuring object
//   ({ firstName, age } = profile);

//   console.log(firstName);
//   console.log(age);


//default values
// const profile = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 18
//   }


//   const { firstName, age, isMale = false } = profile;

//   console.log(firstName)
//   console.log(age)
//   console.log(isMale)