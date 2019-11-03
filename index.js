function clickevent(){
    var hour = new Date().getHours();
    var geeting;
    if(hour < 18){
        geeting = "Good Day";
    }else{
        geeting = "Good Evening";
    }
    document.getElementById("demo").innerHTML = geeting;
}