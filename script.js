let inputs = document.getElementById("input");
let btn = document.getElementById("add");
let table = document.getElementById("table");

inputs.addEventListener("submit", (e) => {
    e.preventDefault()
    let values = e.target.user.value


    console.log(values)
    if (values == "") {
        alert("Please enter a valid number.");
    }
table.innerHTML = ""
    for (let i = 1; i <= 10; i++) {
        let numbers = values * i;

        table.innerHTML += `
            <div class="box box1">${values}</div>
            <div class="box box2">=</div>
            <div class="box box3">${i}</div>
            <div class="box box4">x</div>
            <div class="box box5">${numbers}</div>
            `
    }
    inputs.reset()
})
