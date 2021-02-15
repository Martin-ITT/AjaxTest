/*
var xhr = new XMLHttpRequest(); //object
var data;

xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
console.log(this.readyState);
xhr.send();
console.log(this.readyState);

function setData(jsonData) {
    data = jsonData;
    //console.log(data);
}

xhr.onreadystatechange = function() { //function
    console.log(this.readyState);
    if(this.readyState == 4 && this.status == 200) {
    //document.getElementById("data").innerHTML = this.responseText;
    console.log(this.readyState);
    //console.log(this.responseText);
    //console.log(typeof(this.responseText));
    //console.log(typeof(JSON.parse(this.responseText)));
    //data = this.responseText;
    setData(JSON.parse(this.responseText));
    }
}

/*
setTimeout(function(){
    console.log(data);}, 500);
*/

// callback function
function getData(cb) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
    xhr.send();

    xhr.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
}
/*
getData(function(data ) {
    console.log(data);
});
*/
function printDataToConsole(data) {
    console.log(data);
}

getData(printDataToConsole);

