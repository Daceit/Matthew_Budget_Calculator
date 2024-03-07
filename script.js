let list = new Map();

list.set(`taxes`,32.65)

document.addEventListener(`DOMContentLoaded`, () => {

    let elementById = function(id) {return document.getElementById(id)}

    let addListener = function(id,event,code) {elementById(id).addEventListener(event, (eventData) => {code(eventData)})}



    addListener(`income`,`change`, (eventData) => {
         list.set(eventData.target.id,eventData.target.value)
    })

    addListener(`taxes`,`change`, (eventData) => {
        list.set(eventData.target.id,eventData.target.value)
   })

    addListener(`housing`,`change`, (eventData) => {
        list.set(eventData.target.id,eventData.target.value)
   })

   addListener(`Food`,`change`, (eventData) => {
    list.set(eventData.target.id,eventData.target.value)
})



})

// let income = 0;

// document.addEventListener("DOMContentLoaded", function () {

//     document.getElementById('income').addEventListener('change', function (eventData) {

//         income = document.getElementById('income').value*(1 - document.getElementById('taxes').value/100);

//         console.log(income);
//         console.log(document.getElementById('housing').value !== "")

//     })

//     document.getElementById('housing').addEventListener('change', function (eventData) {

//         console.log(document.getElementById('housing').value)

//         if(document.getElementById('housing').value !==""){// already have a value
//             console.log(income);

//             income = income - document.getElementById('housing').value;
//             console.log(Math.round(income*100)/100); //two place aproximamtion
    
//         }


//     })






// });
