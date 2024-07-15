function getUsers(isOffline, callback) {
    setTimeout(() => {
        const users = ['john', ' jack'];

        if (isOffline) {
            callback(new Error('cannot retrieve users due offline'), null);
            return;
        }

        callback(null, users);
    }, 3000);
}

//create a Promise version of getUsers

const getUsersPromise = promisify(getUsers);

getUsersPromise(false)
    .then(users => console.log(users))
    .catch(err => console.log(err.message));

getUsersPromise(true)
    .then(users => console.log(users)
        .catch(err => console.log(err.message));