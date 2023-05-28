let icon = document.getElementById("icon")
let modal = document.getElementById("small-modal")
let checker = true
let deleteButton = document.getElementById("delete")
let popup = document.getElementById("popup")
let another = true
let nh = document.getElementById("nh")
let whire = true
let yesButton = document.getElementById("yes-button")
let whay = true


icon.addEventListener("click", function(event){
    if(checker === true){
        modal.classList.remove("small-modal-container")
        modal.classList.add("visible-small-modal-container")
        checker = false
    }else if(checker === false){
        modal.classList.remove("visible-small-modal-container")
        modal.classList.add("small-modal-container")
        checker = true
    }
})

deleteButton.addEventListener("click", function(){
    if( another === true){
        popup.classList.remove("popup-container")
        popup.classList.add("visible-popup-container")
        another = false
    }else if( another === false){
        popup.classList.remove("visible-popup-container")
        popup.classList.add("popup-container")
        another = true
    }
})


nh.addEventListener("click", function(){
    if(whire === true){
        popup.classList.remove("visible-popup-container")
        popup.classList.add("popup-container")
    }
})

yesButton.addEventListener("click", function(){
    if(whay === true){
        popup.classList.remove("visible-popup-container")
        popup.classList.add("popup-container")
    }
})