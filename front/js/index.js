let forn = document.getElementById("subForm");

forn.addEventListener("submit", (e) => {
    e.preventDefault();

    let numA = document.getElementById("numA").value;
    let numB = document.getElementById("numB").value;
    let total = document.getElementById("total");

    if (numA != "" && numB != "") {
        console.log('Ok');
        total.innerText = Number(numA) + Number(numB);
    } else {
        total.innerText = '';
    }
});