// //ketemu jika pewarisan class nya seperti ini:
// class Developer {
//     constructor(name) {
//         this.name = name;
//     }

//     commitChanges() {
//         console.log(`${this.name} is committing changes...`);
//     }
// }

// class FrontEndDeveloper extends Developer {
//     buildUI() {
//         console.log(`${this.name} is building UI...`);
//     }
// }

// class BackEndDeveloper extends Developer {
//     buildAPI() {
//         console.log(`${this.name} is building API...`);
//     }
// }

// class DevOps extends Developer {
//     deployApp() {
//         console.log(`${this.name} is deploying app...`);
//     }
// }

// class FullStackDeveloper extends Developer {
//     buildUI() {
//       console.log(`${this.name} is building UI...`);
//     }

//     buildAPI() {
//       console.log(`${this.name} is building API...`);
//     }

//     deployApp() {
//       console.log(`${this.name} is deploying app...`);
//     }
//    }



// // hrus memakai object composition karena menulis ulang method pada fullstack deve


class Developer {
    constructor(name) {
        this.name = name;
    }

    commitChanges() {
        console.log(`${this.name} is committing changes...`);
    }
}

function canBuildUI(developer) {
    return {
        buildUI: () => {
            console.log(`${developer.name} is building UI...`);
        }
    }
}

function canBuildAPI(developer) {
    return {
        buildAPI: () => {
            console.log(`${developer.name} is building API...`);
        }
    }
}

function canDeployApp(developer) {
    return {
        deployApp: () => {
            console.log(`${developer.name} is deploying app...`);
        }
    }
}

//lebih mudah dalam membuat ojek membuat sebuah fungsi sebagai object creator

function createFrontEndDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUI(developer));
}

function createBackEndDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildAPI(developer));
}

function createDevOps(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canDeployApp(developer));
}

function createFullStackDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUI(developer), canBuildAPI(developer), canDeployApp(developer));
}

//implementasi membuat objek dengan argumen
const frontEndDeveloper = createFrontEndDeveloper('Fulan');
frontEndDeveloper.commitChanges();
frontEndDeveloper.buildUI();
console.log(`is ${frontEndDeveloper.name} developer? `, frontEndDeveloper instanceof Developer);