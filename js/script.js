let main = document.querySelector('.main');

let main_center = document.createElement('div')
let buttons_div = document.createElement('div')

let title_h1 = document.createElement('h1')
let title_h2 = document.createElement('h2')

let button_start = document.createElement('div');
let button_stop = document.createElement('div');
let button_reset = document.createElement('div');

button_start.classList.add('button_start')
button_stop.classList.add('button_stop')
button_reset.classList.add('button_reset')

title_h1.innerHTML = 'STOPWATCH'
title_h2.innerHTML = 'VANILA JAVASCRIPT'

button_start.innerHTML = 'start';
button_stop.innerHTML = 'stop';
button_reset.innerHTML = 'reset';

main.append(main_center)

main_center.append(title_h1)
main_center.append(title_h2)
main_center.append(buttons_div)

buttons_div.append(button_start)
buttons_div.append(button_stop)
buttons_div.append(button_reset)