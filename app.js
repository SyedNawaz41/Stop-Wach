//Clock Watch JS Code//

var millisec = "00";
var sec = "00";
var min = "00";
// var hour = "00";
var timerstart;
var msg_minute = document.querySelector("#minute");
var msg_second = document.querySelector("#second");
var msg_MS = document.querySelector("#millisecond");
var btn_start = document.querySelector("#start-button");
function timer(){
   millisec++;
   if(millisec === 10){
      sec++;
      millisec = 0;
   }
   if(millisec <= 9){
      millisec = msg_MS.innerHTML = "0" + millisec++;
   }
   if(sec <= 9){
      sec = msg_second.innerHTML = "0" + sec++;
   }

   if(sec === 60){
      min + min++ ;
      sec = 0;
   }
   if(min <= 9){
      min = min.innerHTML = "0" + min++;
   }

   // if(min === 60){
   //    hour++;
   //    min = 0;
   // }

   msg_MS.innerHTML = millisec;
   msg_second.innerHTML = sec;
   msg_minute.innerHTML = min; 

}

function start(){

    clearInterval(timerstart);
    timerstart = setInterval(timer,100);
    
 }
 
function stop(){
clearInterval(timerstart);
}

function reset(){
   clearInterval(timerstart);
   msg_MS.innerHTML = "00";
   msg_second.innerHTML = "00";
   msg_minute.innerHTML = "00";
   millisec = 0;
   sec = 0;
   min = 0;
   // hour = 0;
  
}