/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Sercan Yildiz Student ID: 131043226 Date: 01/20/2023
*
********************************************************************************/ 



var serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];
var serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];
var serverResponses = ["Welcome to WEB700 Assignment 1", "This assignment was prepared by Sercan Yildiz", "Sercan Yildiz: syildiz2@myseneca.ca", "User Logged In", "Main Panel", "Logout Complete"];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function httpRequest (httpVerb, path){
    if (serverVerbs[serverPaths.indexOf(path)] == httpVerb){
        return "200: " + serverResponses[serverPaths.indexOf(path)];
    }
    return "404: Unable to process httpVerb request for path";
}

function automateTests(){
    var testVerbs = ["GET", "POST"]
    var testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"]
    function randomRequest(){
        var randVerb = testVerbs[getRandomInt(2)] 
        var randPath = testPaths[getRandomInt(7)]
        console.log(httpRequest(randVerb, randPath))
    }
    setInterval(randomRequest, 1000)
}
automateTests()
