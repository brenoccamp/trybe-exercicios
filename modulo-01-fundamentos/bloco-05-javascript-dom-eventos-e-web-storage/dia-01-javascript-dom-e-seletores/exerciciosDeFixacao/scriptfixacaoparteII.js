document.getElementsByTagName('body')[0].style.backgroundColor = '#edf2f4'

document.getElementsByTagName('header')[0].style.backgroundColor = 'rgb(76,164,109)';

function colorH3 () {
    let color = document.getElementsByTagName('h3');
    console.log(color)
    for (let i = 0; i < color.length - 2; i++) {
        color[i].style.backgroundColor = '#9d4edd';
    }
}
colorH3 ();

function colorH31 () {
    let color = document.getElementsByClassName('h32');
    console.log(color)
    for (let i = 0; i < color.length; i++) {
        color[i].style.backgroundColor = '#212529';
    }
}
colorH31 ();

document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor = '#e5989b'

document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor = '#ffd166'

document.getElementsByTagName('footer')[0].style.backgroundColor = '#1b4332';
