const increaseBtn = document.querySelector(".increase");
const decreaseBtn = document.querySelector(".decrease");
const count = document.querySelector(".count");

increaseBtn.addEventListener('click', () => {
    count.innerHTML= parseInt(count.innerHTML )+1;
    changeBackgroundColor();
});

decreaseBtn.addEventListener('click', () => {
    count.innerHTML= parseInt(count.innerHTML )-1;
    changeBackgroundColor();
});

function changeBackgroundColor(){
    if (count.innerHTML >= 5){
        document.body.style.backgroundColor = "green";
    } else if(count.innerHTML <= -5){
        document.body.style.backgroundColor = "red";
    } else {
        document.body.style.backgroundColor = "yellow";
    }
}
