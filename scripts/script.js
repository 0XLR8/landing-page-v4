let firstInput = document.getElementById("firstInput");
let secondInput = document.getElementById("secondInput");

firstInput.addEventListener("input", function(event){
    if(event.target.value !== ""){
        document.getElementById("firstLabel").classList.add("input-onValue");
    }else{
        document.getElementById("firstLabel").classList.remove("input-onValue");
    }
})

secondInput.addEventListener("input", function(event){
    if(event.target.value !== ""){
        document.getElementById("secondLabel").classList.add("input-onValue");
    }else{
        document.getElementById("secondLabel").classList.remove("input-onValue");
    }
})