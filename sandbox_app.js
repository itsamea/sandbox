'use strict'

function poke() { //window alert called in HTML with 'onclick'
    alert("Alert! Alert! This is pop-up uses 'alert()'!");
}

function bonk() { //window prompt
    prompt('Bonk! (N.B. Your input will be lost! Variables defined in a function exist only as long as the function does)'); 
}

const spin = document.getElementById("spin");

var og = spin; // define 'spin' as original
var clone = og.cloneNode(true); //clone it

clone.id = 'clone'; // update the ID
clone.classList.add('largerbox'); //add class
clone.innerHTML = 's l o w  s p i n'

setInterval(og.after(clone),2000); //insert into DOM (will display right under 'spin' div, as if listed below it)

spin.onmouseover = function spinner() {  //quick spin
    spin.style.animationName="spin";
    spin.style.animationDuration="1s";
}

clone.onmouseover = function spinner() { // s l o w spin
    clone.style.animationName="spin";
    clone.style.animationDuration="5s";
}


// chuck this all into a function, repeat foreva (or set a while loop to clear)

//Qs:
    // how to get spinner to run more than once
    // why does defining function seperately only call it onload and not with 'spin.onmouseover = spinner()'?



