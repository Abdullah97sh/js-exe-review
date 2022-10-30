//  Q 1
function checkNum(x) {
  if (x <= 0) {
    console.log("True");
  } else {
    console.log("False");
  }
}

checkNum(-1);

// Q 2

function increment(a) {
  console.log(++a);
}

increment(44);

// Q 3

function strArr(arr) {
  newArr = [];
  arr.forEach((element) => {
    if (/\d/.test(element)) {
      newArr.push(element);
    } else {
      null;
    }
  });
  console.log(newArr);
}

strArr(["anas5", "ahmad3", "amjad30"]);
// other solution
// return arr.filter(element=>/\d/.test(element))

// Q 4

function checkEvenOdd(num) {
  if (num === 0) {
    return "even";
  } else if (num === 1) {
    return "odd";
  } else {
    return checkEvenOdd(num - 2);
  }
}
console.log(checkEvenOdd(8));
console.log(checkEvenOdd(9));

// Q 5

function swap(array, sw1, sw2) {
  newArr = [];
  [...array].forEach((e) => {
    // spread
    if (e == sw1) {
      newArr.push(sw2);
    } else if (e == sw2) {
      newArr.push(sw1);
    } else {
      newArr.push(e);
    }
  });
  console.log(newArr.join("")); //
}

swap("aaddeee", "a", "d");

// Q 6
console.log("Q 6");

function namesArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

namesArray(["Rawan", "Jafar", "Muhammad", "Muhammad", "Esraa", "Dareen"]);

// Q 7
console.log("Q 7");

function namesArray(arr1) {
  arr1.forEach((element) => {
    console.log(element);
  });
}

namesArray(["Rawan", "Jafar", "Muhammad", "Muhammad", "Esraa", "Dareen"]);

// Q 8
console.log("Q 8");

function objArray(arr) {
  newArr = [];
  arr.forEach((e) => {
    newArr.push({ id: e.id, title: e.title });
  });
  return newArr;
}

let newSeries = [
  {
    id: 70111470,
    title: "Die Hard",
    boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 654356453,
    title: "Bad Boys",
    boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
  {
    id: 65432445,
    title: "The Chamber",
    boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 675465,
    title: "Fracture",
    boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
];

console.log(objArray(newSeries));


// Q 9
console.log("Q 9");

let series = newSeries.map(function (e) {
  return `${e.id} ${e.title}`;
  // return (e.id + e.title);  // same
});

console.log(series);


// Q 10  ////////////////////////////////////////////
console.log('Q 10');



// Q 11
console.log('Q 11');
