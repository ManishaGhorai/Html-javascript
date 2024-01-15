let slide_task=1;
let slide1=document.getElementById("slide1")
let slide2=document.getElementById("slide2")
let slide3=document.getElementById("slide3")


function showSlide(n){
    slide_task=slide_task+n;
    console.log(slide_task);
    display(slide_task);
}

function display(n)
{
    if(n%3===1|| n%3===-1){
    slide1.style.display="block"
    slide2.style.display="none"
    slide3.style.display="none"
}

else if(n%3===2|| n%3===-2)
{
    slide1.style.display="none"
    slide2.style.display="block"
    slide3.style.display="none"
}
else{

    slide1.style.display="none"
    slide2.style.display="none"
    slide3.style.display="block"
}
}