//menggantikan operasi iterasi dengan rekursi, dengan rekursi dapat membuat dan
//mengolah data structures seperti Tree dan Array

//sebelum
const countDown = start => {
    do {
        console.log(start);
        start -= 1;
    }
    while (start > 0);
};

countDown(10);


//bentuk recursi
const countDownRecursion = start => {
    console.log(start);
    if (start > 0) countDownRecursion(start - 1);
};

countDownRecursion(10);

// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0