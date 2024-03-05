

let income = 0;

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById('income').addEventListener('change', function (eventData) {

        income = document.getElementById('income').value*(1 - document.getElementById('taxes').value/100);

        console.log(income);
        console.log(document.getElementById('housing').value !== "")

    })

    document.getElementById('housing').addEventListener('change', function (eventData) {

        console.log(document.getElementById('housing').value)

        if(document.getElementById('housing').value !==""){// already have a value
            console.log(income);

            income = income - document.getElementById('housing').value;
            console.log(Math.round(income*100)/100); //two place aproximamtion
    
        }


    })






});
