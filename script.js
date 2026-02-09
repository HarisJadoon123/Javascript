


function myFunction1(e) {
    e.preventDefault();
    let ageInput = document.getElementById("ageInput").value;
    if(!/^\d+$/.test(ageInput))
        alert('Invalid Input');
    else
    {
        let ageOutput = ageInput * 365;
        document.getElementById("ageOutput").value = ageOutput + " Days";
    }
}
function myFunction2(e) {
    e.preventDefault();
    let hoursInput = document.getElementById("hoursInput").value;
    if(!/^\d+$/.test(hoursInput))
    alert('Invalid Input');
    else
    {
    let hoursOutput = hoursInput * 3600;
    document.getElementById("hoursOutput").value = hoursOutput + " Seconds";

}}


function myFunction3(e) {
    e.preventDefault();
    let numbers = document.getElementById("num").value;             // 1. Numbers input lo

    let findNum = Number(document.getElementById("num2").value);        // 2. Search number lo

    let arr = numbers.split(",").map(Number);                           // 3. Array banao (map use)

    let index = arr.indexOf(findNum);                                       // 4. Index dhoondo

    if (index >= 0 && index < arr.length - 1)                                 // 5. Result dikhao
        document.getElementById("output").value = arr[index + 1];
     else 
        document.getElementById("output").value = findNum + 1;
}

function myFunction4(e) {
    e.preventDefault(); 
    let name = document.getElementById("nameInput").value;
    if (name.trim() === "") {
        document.getElementById("nameOutput").value = "Please enter a name";
        return;
    }
    let formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    document.getElementById("nameOutput").value = formattedName;
}

function myFunction5{
    e.preventDefault();
    
}

