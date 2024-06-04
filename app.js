
const populate = async (base, value) =>{
    let tableData = "";
    const URL = `https://api.currencyapi.com/v3/latest?apikey=cur_live_LDt7XQHbcLZPaUQWQbez6DRXyqDSASg4AzWZRWqM&base_currency= ${base}`;

    // console.log(`base currency: ${base}, amount: ${value}`)
    let response = await fetch(URL)
    let resJson = await response.json()
    console.log(resJson)

    for(let key of Object.keys(resJson["data"]))
    {
        tableData += `
                        <tr>
                            <td>${resJson["data"][key]["code"]}</td>
                            <td>${resJson["data"][key]["code"]}</td>
                            <td>${parseFloat((resJson["data"][key]["value"] * value)).toFixed(2)}</td>
                        </tr>
                    `;
        // console.log(resJson["data"][key]["code"],(resJson["data"][key]["value"] * value))
        const output = document.querySelector(".output")
        output.style.visibility = "visible";
    }

    const tableBody = document.querySelector("tbody")
    tableBody.innerHTML = tableData
}


const btn = document.querySelector(".btn")

btn.addEventListener("click", (e)=>{
    e.preventDefault()//prevents form from submitting - helpful while testing
    console.log(`Button is clicked`)
    let amount = parseInt(document.querySelector("#amount").value)
    console.log((amount))
    if(isNaN(amount))
        amount=1;
    const base = document.querySelector("#base-currency").value
    console.log(base)
    populate(base, amount)
})
