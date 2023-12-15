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
        total.innerText = '';
    }
});

async function callApiCalculator(numA, numB, opt, total) {
    const payLoad = {
        var_1: numA,
        var_2: numB,
        operation: opt
    };

    await fetch('http://tf-lb-20231215172408577000000004-144800990.us-east-1.elb.amazonaws.com', {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payLoad)
    })
        .then(response => response.json())
        .then(data => {
            total.innerText = data.result;
        })
        .catch(() => {
            alert("Error, intente nuevamente en unos minutos.");
        });
}
