var btn = document.getElementById('btn');



const random = (min, max) => {
    const rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand);
}
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
btn.onmouseover = function(){
    document.body.style.background = "black";
    btn.style.left = `${random(0, 90)}%`;
    btn.style.top = `${random(0, 90)}%`;

   
}
btn.onmouseleave = function(){
    document.body.style.background = "white";
}

btn.addEventListener('click', function(){
    btn.classList.toggle('light');
    btn.classList.toggle('dark');
})

