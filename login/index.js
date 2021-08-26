
var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})

function teste() {
    let teste = window.prompt(`Digite a data:`)
    let batata = teste.split("/")
    let data = []

    batata.map(function (value) {
        data.push(parseInt(value));
    })

    console.log("Dia: " + data[0] ,"Mês: " + data[1] , "Ano: " + data[2])

 }