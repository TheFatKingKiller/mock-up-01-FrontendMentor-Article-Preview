const shareBubble = document.querySelector(".share-box.flex-container");
const shareBtn = document.querySelector(".person-share");

shareBtn.addEventListener("click", ()=>{
    shareBubble.classList.toggle("hidden");
})