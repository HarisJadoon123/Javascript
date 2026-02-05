console.log("HARIS JADOON");
document.getElementById("demo").innerHTML = "My First JavaScript";


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
    let hoursOutput = hoursInput * 3600;
    document.getElementById("hoursOutput").value = hoursOutput + " Seconds";
}