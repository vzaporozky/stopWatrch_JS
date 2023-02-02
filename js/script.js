let main = document.querySelector('.main');

let main_center = document.createElement('div')
let buttons_div = document.createElement('div')

let title_h1 = document.createElement('h1')
let title_h2 = document.createElement('h2')

let timer = document.createElement('h2')

let button_start = document.createElement('div');
let button_stop = document.createElement('div');
let button_reset = document.createElement('div');

main_center.classList.add('main_center')
buttons_div.classList.add('buttons_div')
timer.classList.add('timer')

button_start.classList.add('button_start')
button_start.classList.add('button')
button_stop.classList.add('button_stop')
button_stop.classList.add('button')
button_reset.classList.add('button_reset')
button_reset.classList.add('button')

title_h1.innerHTML = 'STOPWATCH'
title_h2.innerHTML = 'VANILA JAVASCRIPT'

timer.innerHTML = '00:00:00'

button_start.innerHTML = 'start';
button_stop.innerHTML = 'stop';
button_reset.innerHTML = 'reset';

main.append(main_center)

main_center.append(title_h1)
main_center.append(title_h2)
main_center.append(timer)
main_center.append(buttons_div)

buttons_div.append(button_start)
buttons_div.append(button_stop)
buttons_div.append(button_reset)

let ss = 0;
let mm = 0;
let hh = 0;
let t;

function tick(){
    ss++

    if(ss >= 60){
        ss = 0
        mm++
        if(mm >= 60){
            mm = 0;
            hh++
        }
    }
}

function add(){
    tick();
    timer.textContent = (hh > 9 ? hh : '0' + hh) 
                + ':' +(mm > 9 ? mm : '0' + mm) 
                + ':' +(ss > 9 ? ss : '0' + ss);
    time();
}
function time(){
    t = setTimeout(add, 1000);
}


button_start.onclick = function(){
    if(t){}
    else 
    time()
};
button_stop.onclick = function() {
    clearTimeout(t);
    t = 0;
}
button_reset.onclick = function(){
    clearTimeout(t);
    t = 0;
    timer.textContent = '00:00:00';
    ss = mm = hh = 0;
}