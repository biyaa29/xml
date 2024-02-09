//console.log("first");
//settimeout(()={
//console.log("second");   
//}, 1000); 
//console.log("third");
//apis

// fetch ("https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=5f053f92834efdbea4457f985befe2e9").then(function(res){
//     retun res.json()}).then (function(result) {console.log(result)
//     })

    function gettemp(){
    let getval=document.getElementById("city").value;
    console.log(getval) 
    fetch ("https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=5f053f92834efdbea4457f985befe2e9").then(function(res){
        return res.json()}).then (function(result) {console.log(result.main.temp)
        document.getElementById("temperature").innerHTML=Math.round(result.main.temp)
        })
}