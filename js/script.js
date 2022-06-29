

function clearScreen(){
    //console.log("C");
    document.getElementById("result").value = "";
}

function display(valeur){
    //console.log(valeur);
    document.getElementById("result").value += valeur;
}

function calculate(){
    //console.log("calculer, je suis cliqué");
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
}

document.addEventListener("keydown", function(event) {
    if(event.key=="Enter"){
        calculate();
    
    }else if(event.key=="Backspace"){
        clearScreen();
    }else{
        document.getElementById("result").value+=event.key;
    }

    console.log(event);
  })



