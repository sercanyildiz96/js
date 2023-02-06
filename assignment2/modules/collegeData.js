class Data{

    constructor(student, course){

        this.student = student;
        this.course = course;
    }

}

let dataCollection = null

function initialize(){

    const fs = require('fs'); 

    return new Promise(function(resolve, reject){
        var data1 = () => JSON.parse(fs.readFileSync('data\\students.json', 'utf8'));
        var data2 = () => JSON.parse(fs.readFileSync('Data\\courses.json', 'utf8'));
        dataCollection = new Data(data1(), data2())
        resolve(dataCollection);
    });        
}

function getAllStudents(){

    return new Promise(function(resolve, reject){

        if(dataCollection.length === 0){
            reject("no results returned");
        }

        else{
            resolve(dataCollection.student)
        }
    })
}

function getAs(){

    return new Promise(function(resolve, reject){
        
        if (dataCollection.length != 0) {
            var TA = [];

            for (let i = 0; i < dataCollection.student.length; i++) {
                if(dataCollection.student[i]["TA"] === true){
                    TA.push(dataCollection.student[i])
                }
              }
              resolve(TA)

        } 

        else {
            reject(new Error("no results returned"));
        }
})
}

function getCourses(){

    return new Promise(function(resolve, reject){

        if (dataCollection.length === 0) {
            reject("no results returned");
        }

        else{
            resolve(dataCollection.course)
        }

    })
}

module.exports = {initialize, getAllStudents, getAs, getCourses};