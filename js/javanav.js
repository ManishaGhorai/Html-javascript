let toggler=document.querySelector('.toggleIcon')
let nav_list=document.querySelector('.nav_list')

toggler.addEventListener('click',display)

function display()
{
    nav_list.classList.toggle('show')
}