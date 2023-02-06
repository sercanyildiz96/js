/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Sercan Yildiz Student ID: 131043226 Date: 02/05/2023
*
********************************************************************************/ 


modu = require('./modules/collegeData');

try {

    modu.initialize()

    modu.getAllStudents().then(data1 => {
        console.log("Successfully retrieved " + Object.keys(data1).length+ " students");
      });

    modu.getCourses().then(data2 => {
        console.log("Successfully retrieved "+ Object.keys(data2).length + " courses");
      });

    
    modu.getAs().then(taData => {
        console.log("Successfully retrieved " + Object.keys(taData).length + " TAs");
      });
} 

catch(err) {

    console.log(err + "Rejected");

}

