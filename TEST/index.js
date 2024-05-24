let buttonOnPage = document.getElementById("btn");
let randomColor = "0123456789ABCDEFGHIJKLMNOPQRSTU";

function generateColor() {
     let color = "#";
     for (let i =0; i <6; i++) {
          color += randomColor[Math.floor(Math.random() * 16)];
          console.log(color);
     }
     return color;
}

buttonOnPage.addEventListener("click", () =>{
     let bgColor = generateColor();
     document.body.style.backgroundColor = bgColor;
});