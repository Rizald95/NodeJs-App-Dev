const sayName = (greet) => {
    console.log(`${greet}`)
}


const sayNameNoParameter = () => {
    console.log("Selamat pagi semuanya")
}

//variable scope

const multiply = (num) => {
    total = num * num;
    return total;


}

let total = 9;
let number = multiply(20);
console.log(total) //400

//jika lupa menuliskan keyword let, const, atau var pada
//script ketika membuat sebuah variabel, maka variabel tersebut akan menjadi global

//sebisa mungkin harus menghindari pembuatan variabel global, karena variabel global yang dituliskan, semakin tinggi kemungkinan tabrakan (collison ) terjadi.