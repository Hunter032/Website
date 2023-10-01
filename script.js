let items = document.querySelectorAll('.allowActive');
    let containerFuild = document.querySelector('.container-fuild');
    
    containerFuild.addEventListener('scroll', ()=>{
        items.forEach(item => {
            if(item.offsetTop - containerFuild.scrollTop < window.innerHeight*(2/3)){
                item.classList.add('active');
            }else{
                item.classList.remove('active');
            }
        })
    })

// When inquiry is clicked it will take you to the information page to fill out the information needed for more information

const contactUsBtn = document.getElementById('inqBtn');
contactUsBtn.addEventListener('click', function() {
    window.location.href = 'contact.html'
})

// Scripts for Scrolling pics to work!

let slider = document.querySelector('.slider .list');
let itemz = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = itemz.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 5000);
function reloadSlider(){
    slider.style.left = -itemz[active].offsetLeft + 'px';
    
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 5000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};