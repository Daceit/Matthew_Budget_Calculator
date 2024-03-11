let list = new Map();

list.set(`taxes`, 32.65)

let utils = {}; //create a namespace for our utility functions

//get function to make an HTTP GET request
utils.get = (url) => {

    //start promise object
    return new Promise(function (resolve, reject) {

        //create a new XMLHttpRequest object
        let request = new XMLHttpRequest();

        //initialize the request
        request.open('GET', url);

        request.onload = function () {
            //resolve on success
            if (request.status == 200) { // HTTP: OK
                console.log('Response OK');
                resolve(request.response);
            }
            //reject on error
            else {
                reject(Error(`promise error with ${request.status}`))
            }
        };
        //handle network errors
        request.onerror = function (error) {
            reject(Error(`Network Error with ${url}: ${error}`))
        };
        //send the request
        request.send();
    }); //end Promise Object
}

//getJSON function to get JSON data from the server
utils.getJSON = async function (url) {
    let string = null;
    //get the JSON string from the server
    try {
        string = await utils.get(url);
    }
    catch (error) {
        console.log(error)
    }
    //parse the JSON string and return the data
    let data = JSON.parse(string);
    return data;
}

async function init() {
    //get the root element of the web page
    let root = document.querySelector('#careers');

    //create a variable to hold the URL of the JSON data source
    let url = 'https://api-demo.cartwebapp.com/data/2024';

    //create a variable to hold the JSON data
    let occupations = null;

    //try to retrieve the JSON data from the server
    try {
        //retrieve the JSON data from the server
        occupations = await utils.getJSON(url);
    }
    //catch any errors and display them in the root element
    catch (error) {
        root.style.color = 'red';
        root.textContent = `error: ${error}`;
    }

    //show JSON data on the html page
    root.innerHTML = buildList(occupations);
}

function buildList(jobs) {
    //create an empty string to hold the HTML
    let html = '';

    //loop through the array of job objects retrieved from the JSON data
    for (let job of jobs) {

        //start an HTML section for each job
        html += '<section>';

        /* An alternative way of looping through each item in the data, not as useful for this assignment but something to keep in mind for a story? ... */
        //loop through each entry and create a div for each key:value pair
        // for (let key in job) {
        //     html += `<div><strong>${key}</strong>: ${job[key]}</div > `;
        // }

        //create a div element for the job title
        html += `<div><strong>Occupation</strong>: ${job.occupation}</div>`;
        //create a div element for the salary and format it as currency
        html += `<div><strong>Salary</strong>: $${job.salary.toLocaleString('en-US')}</div>`;
        //close the section
        html += '</section>';

        //add a line break
        html += '</br>'
    }

    //return the completed html
    return html;
}
//initialize the web page when the DOM is ready
document.addEventListener('DOMContentLoaded', init);

document.addEventListener(`DOMContentLoaded`, () => {

    let elementById = function (id) { return document.getElementById(id) }

    let addListener = function (id, event, code) { elementById(id).addEventListener(event, (eventData) => { code(eventData) }) }



    addListener(`income`, `change`, (eventData) => {
        list.set(eventData.target.id, eventData.target.value)
    })

    addListener(`taxes`, `change`, (eventData) => {
        list.set(eventData.target.id, eventData.target.value)
    })

    addListener(`housing`, `change`, (eventData) => {
        list.set(eventData.target.id, eventData.target.value)
    })

    addListener(`Food`, `change`, (eventData) => {
        list.set(eventData.target.id, eventData.target.value)
    })

    addListener(`Travel`, `change`, (eventData) => {
        list.set(eventData.target.id, eventData.target.value)
    })

    addListener(`Childcare`, `change`, (eventData) => {
        list.set(eventData.target.id, eventData.target.value)
    })

    addListener(`Food`, `change`, (eventData) => {
        list.set(eventData.target.id, eventData.target.value)
    })

    addListener(`Food`, `change`, (eventData) => {
        list.set(eventData.target.id, eventData.target.value)
    })

    addListener(`Food`, `change`, (eventData) => {
        list.set(eventData.target.id, eventData.target.value)
    })

    addListener(`Food`, `change`, (eventData) => {
        list.set(eventData.target.id, eventData.target.value)
    })



})




let income = 0;

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById('income').addEventListener('change', function (eventData) {

        income = document.getElementById('income').value * (1 - document.getElementById('taxes').value / 100);

        console.log(income);
        console.log(document.getElementById('housing').value !== "")

    })

    document.getElementById('housing').addEventListener('change', function (eventData) {

        console.log(document.getElementById('housing').value)

        if (document.getElementById('housing').value !== "") {// already have a value
            console.log(income);

            income = income - document.getElementById('housing').value;
            console.log(Math.round(income * 100) / 100); //two place aproximamtion

        }

    })
    document.getElementById('Food').addEventListener('change', function (eventData) {

        console.log(document.getElementById('Food').value)

        if (document.getElementById('Food').value !== "") {// already have a value
            console.log(income);

            income = income - document.getElementById('Food').value;
            console.log(Math.round(income * 100) / 100); //two place aproximamtion

        }

    })
    document.getElementById('Travel').addEventListener('change', function (eventData) {

        console.log(document.getElementById('Travel').value)

        if (document.getElementById('Travel').value !== "") {// already have a value
            console.log(income);

            income = income - document.getElementById('Travel').value;
            console.log(Math.round(income * 100) / 100); //two place aproximamtion

        }

    })
    document.getElementById('Childcare').addEventListener('change', function (eventData) {

        console.log(document.getElementById('Childcare').value)

        if (document.getElementById('Childcare').value !== "") {// already have a value
            console.log(income);

            income = income - document.getElementById('Childcare').value;
            console.log(Math.round(income * 100) / 100); //two place aproximamtion

        }

    })
    document.getElementById('Medical').addEventListener('change', function (eventData) {

        console.log(document.getElementById('Medical').value)

        if (document.getElementById('Medical').value !== "") {// already have a value
            console.log(income);

            income = income - document.getElementById('Medical').value;
            console.log(Math.round(income * 100) / 100); //two place aproximamtion

        }

    })
    document.getElementById('Insurance').addEventListener('change', function (eventData) {

        console.log(document.getElementById('Insurance').value)

        if (document.getElementById('Insurance').value !== "") {// already have a value
            console.log(income);

            income = income - document.getElementById('Insurance').value;
            console.log(Math.round(income * 100) / 100); //two place aproximamtion

        }

    })
    document.getElementById('Media').addEventListener('change', function (eventData) {

        console.log(document.getElementById('Media').value)

        if (document.getElementById('Media').value !== "") {// already have a value
            console.log(income);

            income = income - document.getElementById('Media').value;
            console.log(Math.round(income * 100) / 100); //two place aproximamtion

        }

    })
    document.getElementById('Debt').addEventListener('change', function (eventData) {

        console.log(document.getElementById('Debt').value)

        if (document.getElementById('Debt').value !== "") {// already have a value
            console.log(income);

            income = income - document.getElementById('Debt').value;
            console.log(Math.round(income * 100) / 100); //two place aproximamtion

        }

    })
    document.getElementById('Savings').addEventListener('change', function (eventData) {

        console.log(document.getElementById('Savings').value)

        if (document.getElementById('Savings').value !== "") {// already have a value
            console.log(income);

            income = income - document.getElementById('Savings').value;
            console.log(Math.round(income * 100) / 100); //two place aproximamtion

        }

    })
    document.getElementById('Other').addEventListener('change', function (eventData) {

        console.log(document.getElementById('Other').value)

        if (document.getElementById('Other').value !== "") {// already have a value
            console.log(income);

            income = income - document.getElementById('Other').value;
            console.log(Math.round(income * 100) / 100); //two place aproximamtion

        }

    })

    let arrayInputs = document.querySelectorAll(".ExpensesInput");
    console.log(arrayInputs);
    for (input of arrayInputs) {
        input.addEventListener('change', function () {
            document.getElementById("Total").value = income;
        })

    }
});
