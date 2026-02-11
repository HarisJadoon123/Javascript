


function myFunction1(e) {
    e.preventDefault();
    let ageInput = document.getElementById("ageInput").value;
    if (!/^\d+$/.test(ageInput))
        alert('Invalid Input');
    else {
        let ageOutput = ageInput * 365;
        document.getElementById("ageOutput").value = ageOutput + " Days";
    }
}
function myFunction2(e) {
    e.preventDefault();
    let hoursInput = document.getElementById("hoursInput").value;
    if (!/^\d+$/.test(hoursInput))
        alert('Invalid Input');
    else {
        let hoursOutput = hoursInput * 3600;
        document.getElementById("hoursOutput").value = hoursOutput + " Seconds";

    }
}


function myFunction3(e) {
    e.preventDefault();
    let num3 = document.getElementById("num3").value;
    let snum = Number(num3)
    let numbers = document.getElementById("num").value;             // 1. Numbers input lo

    let findNum = Number(document.getElementById("num2").value);        // 2. Search number lo

    let arr = numbers.split(",").map(Number);                           // 3. Array banao (map use)

    let index = arr.indexOf(findNum);                                       // 4. Index dhoondo

    if (index >= 0 && index < arr.length - 1)                                 // 5. Result dikhao
        document.getElementById("output").value = arr[index + 1];
    else
        document.getElementById("output").value = "not in the array";
    if (num3 !== "") {
        let result;
        if (Number.isInteger(snum)) {
            result = snum + 1;
        } else {
            result = snum + 0.1;
        }
        document.getElementById("output").value = result;
    }
}

function myFunction4(e) {
    e.preventDefault();
    let name = document.getElementById("nameInput").value;
    let words = name.split(" ");   
    let result = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i] !== "") {
            result += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase() + " ";
        }
    }
    document.getElementById("nameOutput").value = result;
}



function myFunction5(e) {
    e.preventDefault();
    let weight = document.getElementById("weightInput").value;
    let height = document.getElementById("heightInput").value;
    let bmi = weight / (height * height);
    document.getElementById("bmiOutput").value = bmi;
}

function myFunction6(e) {
    e.preventDefault();
    let arr = [];
    let length = Math.floor(Math.random() * 10 + 1);
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
    document.getElementById("arrayInput").value = arr;
    document.getElementById("firstOutput").value = arr[0];
    document.getElementById("lastOutput").value = arr[length - 1];
}

let a = document.getElementById("firstNum");
let b = document.getElementById("secondNum");

a.addEventListener("input", myfunction7);
b.addEventListener("input", myfunction7);

function myfunction7() {
    let first = Number(a.value);
    let second = Number(b.value);

    if (a.value != "" && b.value == "") {
        document.getElementById("resultOutput").value = NaN;
    } else {
        document.getElementById("resultOutput").value = first + second;
    }
}
