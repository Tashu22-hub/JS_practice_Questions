document.getElementById('time');
setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleDateString()); run in console 

    // lets run in document 
    time.innerHTML = date.toLocaleTimeString();
} , 1000)