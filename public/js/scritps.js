const colors =["Orange", "Green", "rgba(188,122,200)", "#ft198035"];
const color = documnet.querySelector(".color");

btn.addEventListener("click", function () {
    //get random number between 0 -15
    const randomNumber = getNumber();
    console.log(randomNumber);

    documnent.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length); 
}