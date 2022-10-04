let text = document.getElementById('text');
let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountainsBehind = document.getElementById('mountains_behind');
let forest = document.getElementById('forest');
let btn = document.getElementById('btn')
let rocks = document.getElementById('rocks')
let water = document.getElementById('water')
let header = document.getElementById('header')

window.addEventListener('scroll', function(){
    let value = this.window.scrollY;

    text.style.marginBottom = value * 3.35 + 'px';
    stars.style.left = value * 1.25 + 'px';
    mountains_behind.style.top = value * 0.5 + 'px';
    btn.style.marginTop = value * 1.6 + 'px';
    rocks.style.top = value * -0.12 + 'px';
    forest.style.top = value * 0.25 + 'px';
    header.style.top = value * 0.5 + 'px';
})
