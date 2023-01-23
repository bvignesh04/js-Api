// JS WEB APIS
// 1.FORM API

// 2.HISTORY API

// 3.STORAGE API - The Web Storage API is a simple syntax for storing and retrieving data in the browser. It is very easy to use

// SESSION STORAGE OBJECT
// localStorage.setItem("name", "John Doe");
// localStorage.getItem("name");

// The data is stored with no expiration date, and will not be deleted when the browser is closed.

// The data will be available for days, weeks, and years.

// // SESSION STORAGE OBJECT
// The sessionStorage object is identical to the localStorage object.
// The difference is that the sessionStorage object stores data for one session.
// The data is deleted when the browser is closed.

// 4.WORKERS API

// 5. FETCH API

// The Fetch API interface allows web browser to make HTTP requests to web servers.
// 😀 No need for XMLHttpRequest anymore.

// 6.GEO LOCATION API

// Locate the User's Position
// The HTML Geolocation API is used to get the geographical position of a user.
// Since this can compromise privacy, the position is not available unless the user approves it.

// RESTful API - REPRESENTATIONAL STATE TRANSFER(coined in Roy fielding's 2000 phd disseration)

// GET - READ
// POST - CREATE
// PATCH - UPDATE
// DELETE - DESTROY


// MORE METHODS ARE ALSO THERE...

// BASIC DEMO


// WAYS TO CALL API

// 1.XMLHttpRequest(INBUILT) - BEFORE ES6 IT IS THE ONLY WAY TO CALL API 

// const request = new XMLHttpRequest();
// request.open('GET','LINK');
// request.send();
// request.onload = ()=>{
//     if(request.status === 200){console.log(JSON.parse(request.response))}
//     else{console.log(request.response )
//     console.log( `error ${request.status}`)} 
// }

// // 2.FETCH

// fetch('LINK')
// .then((response)=>{return response.json()})
// .then((data)=>{let actualneed = data.name;
//                 console.log(actualneed)})
// // 1.everything returns only promise untill it is in the state of promise have to use then as long incase any error go with catch
// 2.After fulfillment we get one response(thats in json format so have to parse) - .then((response)=>{return response.json()})
// 3. return means we are passing the processed data to the next then - .then((data)=>{let actualneed = data.name})


// asyn await method also available

// 3.AXIOS - open source library for making http request - third party js library

// we have to install axios to use by npm or can use cdn(content delivery network)

// axios.get('link')
// .then((response)=>{console.log(response)}) //direct response no need to parse i think so
// .catch((error)=>{console.log(error)})


// 4.jQuery - just like axios have to install or use cdn
// you can see $ symbol if you console your window

// $(document).ready(function(){
//     $.ajax({
//         url:'link',
//         type:'GET',
//         success:function(result){
//            console.log(result)
//         },
//         error:function(error){
//             console.log(error)
//         }
//     })
// })