const shareBubble = document.querySelector(".share-grid");
const shareBtn = document.querySelector(".person-share");

let width = document.documentElement.clientWidth;

shareBtn.addEventListener("click", ()=>{
    shareBubble.classList.toggle("show-share");
    if(width < 421){
        document.querySelector(".person img").classList.toggle("hidden");
        document.querySelector(".person-text").classList.toggle("hidden");
    }
    else{
        document.querySelector(".person img").classList.remove("hidden");
        document.querySelector(".person-text").classList.remove("hidden");  
    }
})

window.addEventListener('resize', ()=>{
    width = document.documentElement.clientWidth;
})