function getUsers(isOffline) {
    //return a Promise object
    return new Promise((resolve, reject) => {
        //simulate network delay
        setTimeout(() => {
            const users = ['John', 'Jack', 'Abigail'];

            if (isOffline) {
                reject(new Error('cannot retrieve users due offline'));
                return;
            }

            //nilai yang akan dibawa menggunakan resolve
            resolve(users);
        }, 3000);
    });
}

getUsers(false)
    .then(users => console.log(users))
    .catch(err => console.log(err.message));