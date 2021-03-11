let li = document.getElementById('first')
li.addEventListener("mouseover", Colorchange)
let h3 = document.getElementById('firsth3')
function Colorchange(){
    h3.style.color = "orange";
}
li.addEventListener("mouseout", Colorchange2)

function Colorchange2(){
    h3.style.color = "#0071c2";
}