//Callback adalah sebuah fungsi yang dimasukan sebagai argumen pada fungsi asinkrin dan akan di panggil
//ketika proses selesai
//fungsi callback akan membawa nilai-nilai yang dihasilkan dari proses asinkron sehingga dapat memanfaatkan nilai tersebut

function getUsers(callback) {
    setTimeout(() => {
        const users = ['john', 'jack'];
        callback(users);
    }, 3000);
}

getUsers((users) => {
    console.log(users);
});