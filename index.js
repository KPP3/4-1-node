const http= require("http");
const url = require("url");

const product = ["milk", "eggs", "cheese", "pork", "shrimp", "chicken"];

let profile = " This is Profile page."
let products = " This is Product page."
let cart = " This is definatly a Cart."
let register = " Please, Register here."
let login = " Login below."

http.createServer(function (request, response){

    response.writeHead(200, {'Content-Type': 'text/html'});

    let query = url.parse(request.url, true).query
    let responseoOutput = "",

    if (request.url === "/profile"){
        response.write(profile);
    } else if (request.url === "/products"){
        if (query.search !== undefined){
            responseoOutput = product.includes(query.search)
            ?`<h1> Product ${query.search} found. </h1>`
            :`<h1> Product ${query.search} not found. </h1>`
        } else {
        response.write(products);}
    } else if (request.url === "/cart"){
        response.write(cart);
    } else if (request.url === "/login"){
        response.write(login);
    } else if (request.url === "/register"){
        response.write(register);
    } else {
        response.write("Page not found. 404");
    }
    response.end()
}).listen(7777);