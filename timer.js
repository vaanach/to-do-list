let timeleft= 600;
let timerId;
let workcount=0;
let min;
let sec;
let formatsec;
let ogtheme=true;
let goalT="";
let goals=[];
const clickS= new Audio("Click-2.mp3");
function updateTimer(){
    if (document.getElementById("display").textContent!="0:00"){
    timeleft --;
     min= Math.floor(timeleft/60);
     sec= timeleft % 60;
     formatsec=String(sec).padStart(2,'0');
    document.getElementById("display").textContent= min + ":" + formatsec;
    if (timeleft<=0){
        clearInterval(timerId);
        document.getElementById("display").textContent="0:00";
        workcount ++;
        document.getElementById("workcount").textContent=workcount;
    };
    };
};
function startTimer(){
    timerId=setInterval(updateTimer,1000);
}
function resetTimer(){
    timeleft=600;
    clearInterval(timerId);
    document.getElementById("display").textContent="10:00";

}
function pauseTimer(){
    if (timerId){
        clearInterval(timerId);
        document.getElementById("display").textContent= min + ":" + formatsec;
    }
    else{
        window.alert("timer is not running");
    }
}
function changeTheme(){
    clickS.play();
    if (ogtheme){
    document.body.style.backgroundColor="black";
    document.body.style.color="white";
    document.getElementById("timer").style.borderColor="white";
    document.getElementById("pagetheme").textContent="light theme";
    document.getElementById("pagetheme").style.backgroundColor="white";
    document.getElementById("pagetheme").style.color="black";
    document.getElementById("main").style.borderColor="white";
    ogtheme=false;
}
else{
    document.body.style.backgroundColor="white";
    document.body.style.color="black";
    document.getElementById("timer").style.borderColor="black";
    document.getElementById("pagetheme").textContent="dark theme";
    document.getElementById("pagetheme").style.backgroundColor="black";
    document.getElementById("pagetheme").style.color="white";
    document.getElementById("main").style.borderColor="black";
    ogtheme=true;
}
}
function addGoal(){
    let goalT = document.getElementById("goalin").value;
    //window.alert(goalT);
    goals.push(goalT);

}
function showlist(){
    document.getElementById("goal1").textContent="1";
}
document.getElementById("strbtn").addEventListener("click",startTimer);
document.getElementById("rstbtn").addEventListener("click",resetTimer);
document.getElementById("stop").addEventListener("click",pauseTimer)
document.getElementById("pagetheme").addEventListener("click",changeTheme);
document.getElementById("submit").addEventListener("click",addGoal)
document.getElementById("add").addEventListener("click",showlist)