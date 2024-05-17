function relogio (){
    function getTimeFromSeconds(seconds) {
        const data = new Date(seconds * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }
    
    const relogio = document.querySelector('.relogio');
    let seconds = 0;
    let timer;
    
    function start() {
        timer = setInterval(function () {
            seconds++;
            relogio.innerHTML = getTimeFromSeconds(seconds);
        }, 1000);
    }
    
    document.addEventListener('click', function (e) {
        const el = e.target;
    
        if (el.classList.contains('zerar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            seconds = 0;
        }
        if (el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            start();
        }
        if (el.classList.contains('pausar')) {
            relogio.classList.add('pausado');
            clearInterval(timer);
        }
    })
}
    relogio();


// iniciar.addEventListener('click', function (event) {
//     relogio.classList.remove('pausado');
//     clearInterval(timer);
//     start();
// })
// pausar.addEventListener('click', function (event) {
//     relogio.classList.add('pausado');
//     clearInterval(timer);
// })
// zerar.addEventListener('click', function (event) {
//     relogio.classList.remove('pausado');
//     clearInterval(timer);
//     relogio.innerHTML = '00:00:00';
//     seconds = 0;
// })