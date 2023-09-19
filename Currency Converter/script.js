let currency;


const btn = document.getElementById("btn");

const populate = async (value, currency) => {
    let myStr = '';
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;
    let response = await fetch(url);
    let rjson = await response.json();
    document.querySelector(".output").style.display = "flex";
    for (const key of Object.keys(rjson[`${currency}`])) {
        myStr += `
        <tr>
            <td>${key}</td>
            <td>${rjson[`${currency}`][key] * value}</td>
        </tr>
        `;
    }
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = myStr;
    
}

btn.addEventListener("click", (e) => {
    e.preventDefault();
    const currencyValue = parseInt(document.getElementById("number").value);
    const country = document.getElementById("country").value;
    populate(currencyValue, country);
})
