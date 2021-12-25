let img1=document.querySelector(".img1")
let modal1=document.querySelector(".modal1")
let krestick1=document.querySelector(".krestick1")
img1.addEventListener("click", (e)=>{
    e.preventDefault()
    modal1.style.display="block"
})
krestick1.addEventListener("click", (e)=>{
    modal1.style.display="none"
})