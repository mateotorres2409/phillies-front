const api = "http://tf-lb-20231215203320637300000004-698336987.us-east-1.elb.amazonaws.com"
let forn = document.getElementById("subForm");

forn.addEventListener("submit", async (e) => {
    e.preventDefault();

    let numA = document.getElementById("numA").value;
    let numB = document.getElementById("numB").value;
    let opt = document.getElementById("option").value;
    let total = document.getElementById("total");

    if (numA != "" && numB != "") {
        await callApiCalculator(numA, numB, opt, total);
    } else {
        total.innerText = "";
    }
});

async function callApiCalculator(numA, numB, opt, total) {
    const payLoad = {
        var_1: numA,
        var_2: numB,
        operation: opt
    };

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(payLoad)
    };

    await fetch(api, requestOptions)
        .then(response => response.json())
        .then(data => {
            total.innerText = data.result;
        })
        .catch(() => {
            alert("Error, intente nuevamente en unos minutos.");
        });
}
