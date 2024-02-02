// & synchronous and asynchronous operations
// setTimeout(() => {
//     console.log("second");
    
//     }, 1000);
//     console.log("third");
    
    // & Apis
    
  
    function getTemp(){
      let getval = document.getElementById("temp").value;
      console.log(getval)

      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${getval}&appid=5f053f92834efdbea4457f985befe2e9&units=metric`).then(function (res) {
      return res.json()
    }).then(function(result){ 
      console.log(result) 
      
       document.getElementById("head").innerHTML=Math.round(result.main.temp)
       
    })
    }