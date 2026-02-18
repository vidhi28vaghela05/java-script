let h1 = document.querySelector("h1")
window.addEventListener("keydown",(dets)=>{
    console.log(dets.key);
    h1.textContent = dets.key;
    if(dets.key===''){
        h1.textContent= "spaceBar"
    }
});