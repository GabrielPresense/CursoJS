function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pr-BT', {
        hora12: false
    });
}
function funcaoDoIntervalo() {
    console.log(mostraHora());
}

const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000);

setTimeout(function() {
    clearInterval(timer);
}, 5000);

setTimeout(function() {
    console.log('Olá mundo!')
}, 5000)