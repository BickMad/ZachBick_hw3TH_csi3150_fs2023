

//gets button
document.getElementById("leftButton").addEventListener("click", function(){
    const textElement = document.getElementById("leftText");
    if(textElement.style.display === "none" || textElement.style.display === ""){
        //if display is none then chage to show text once clicked
        textElement.style.display = "block";
        this.textContent = "Hide";
    } else {
        //same but opp
        textElement.style.display = "none";
        this.textContent = "Read";
    }
});
//repeat for each button
document.getElementById("middleButton").addEventListener("click", function(){
    const textElement = document.getElementById("middleText");
    if(textElement.style.display === "none" || textElement.style.display === ""){
        textElement.style.display = "block";
        this.textContent = "Hide";
    } else {
        textElement.style.display = "none";
        this.textContent = "Read";
    }
});

document.getElementById("rightButton").addEventListener("click", function(){
    const textElement = document.getElementById("rightText");
    if(textElement.style.display === "none" || textElement.style.display === ""){
        textElement.style.display = "block";
        this.textContent = "Hide";
    } else {
        textElement.style.display = "none";
        this.textContent = "Read";
    }
});