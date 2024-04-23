var istatus=document.querySelector("h5");
var btn=document.querySelector("#addfriend");
var flag=0;

btn.addEventListener("click",function(){
    if(flag==0){
    istatus.innerHTML="Friends";
    istatus.style.color="green";
    btn.innerHTML="Remove"
    btn.style.backgroundColor="grey";
    flag=1;
    }else{
    istatus.innerHTML="Stranger";
    istatus.style.color="red";
    btn.innerHTML="Add Friend"
    btn.style.backgroundColor="cadetblue";
    flag=0;
    }
}); 