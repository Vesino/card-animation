//Animación del movimiento
const card = document.querySelector('.card');
const container = document.querySelector('.container')
const title = document.querySelector('.title')
const description = document.querySelector('.info h3')
const sneaker = document.querySelector('.sneaker img')
const sizes = document.querySelector('.sizes')
const purchase = document.querySelector('.purchase')


//evento de animación
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX)  / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});
//Animate In
container.addEventListener("mouseenter", (e) => {
    card.style.transition = 'none';
    //popout
    title.style.transform = `translateZ(150px)`;
    sneaker.style.transform = `translateZ(150px) rotateZ(-45deg)`;
    description.style.transform = `translateZ(100px)`;
    sizes.style.transform = `translateZ(100px)`;
    purchase.style.transform = `translateZ(80px)`;
});


//Animate Out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    // popin
    title.style.transform = `translateZ(0px)`;
    sneaker.style.transform = `translateZ(0px) rotateZ(0deg)`;
    sizes.style.transform = `translateZ(0px)`;
    purchase.style.transform = `translateZ(0px)`;
    description.style.transform = `translateZ(0px)`;
    
});