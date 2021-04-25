const div = document.querySelectorAll(".div")
const btn = document.querySelector(".btn");

let player_one = true;
let player_two = false;
let a=[];
function set(){
    for(let i=0;i<div.length;i++){
        a[i]=true;
    }
}

set();

div.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        if(player_one==true && a[index]==true){
            item.classList.add("square");
            player_one = false;
            player_two = true;
        }
        else if(player_two==true && a[index]==true){
            item.classList.add("circle");
            player_two = false;
            player_one = true;
        }
        a[index] = false;
    })
})

btn.addEventListener("click",()=>{
    set();
    player_one=true;
    player_two = false;
    div.forEach(item=>{
        item.classList.remove("square");
        item.classList.remove("circle");
    })
})