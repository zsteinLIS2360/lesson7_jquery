/*
    Program Name: Recipe Display Application
    
    Author: Zachary Stein
    
    Date: 4/6/16
    
    Filename: drill4.js
    
*/

//displays the next element after the current targer
function display(event) {
    
    $(event.currentTarget).next().fadeIn("slow");
    
}
//end of display

//Attach event listener to h3 elements to invoke display function when clicked
//$("h3").click(display);

//displays and animates the next element after the current target


function display2(event){
    
    $(event.currentTarget).next().animate( {height: 'toggle'}, "slow");
}
//end of display2

//attach event listener to the h3 elements to invoke display function when clicked
$("h3").click(display2);

//change the background color h3 element when mouse hovers over it
$("h3").hover(function(){
    $(this).css("background-color", "yellow");
    }, function(){
        $(this).css("background-color", "pink");
    });

//hover() will trigger display2 method each time mouse hovers over header
$("h3").hover(display2);