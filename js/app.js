'use strict'

let name = prompt("Heyy What Is Your name ?");

alert("Heey, wlecome To My Modest Website " + name);


let play = prompt(" Are you Ready to Play ? ");
if(play != "yes"){
    alert("Be Ready And Say yes"); 
     play = prompt(" Please enter yes To complete  ");
     play = play.toLowerCase();
     console.log(play);
  }

let age = prompt("Do you think im 21 years old ? , Please enter yes or no ")
if(age != "yes"){
    alert("YOU GOT WRONG");
    age = age.toLowerCase();  
    console.log(age);

 }

 let food = prompt("Do you think i like Manasf ? ")
 if(food !="yes"){
    alert("Come on dud most People I think love Manasf");
     food = food.toLowerCase();
     console.log(food);
 }

 let color = prompt("My Fav Color is Pink ? ")
 if(color !="No"){
    alert("Absoultly No ");
     color = color.toLocaleLowerCase();
     console.log(color);
 }

let ps = prompt("Do you think i like problem solving ?");
if(ps !="yes"){
    alert("Ofc I like it ")
    ps = ps.toLocaleLowerCase ();
    console.log(ps);
}

alert("Hope you enjoy " + name);


