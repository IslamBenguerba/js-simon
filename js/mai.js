const orario = document.getElementById('ora')
const timer = document.getElementById('timer')
function moment (){
    let data = new Date()
    let ora = parseInt(data.getHours());
    let min = parseInt(data.getMinutes());
    let sec = parseInt(data.getSeconds());

    orario.innerHTML =`${ora}:${min}:${sec}`
}
setInterval(moment,100)



setInterval(controllo,100)
function controllo(){
    const datadomani = new Date("Jul 14,2023 09:00:00").getTime()
    const dataNow = new Date();
    let differenza = datadomani -dataNow
    //trasformo la differenza in un dato comprensibile
    // il Math.floor serve per non vedere in centesimi 
    let giorno = Math.floor(differenza / (1000 * 60 * 60 * 24));
    let  oraDomani = Math.floor((differenza % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minDomani = Math.floor((differenza % (1000 * 60 * 60)) / (1000 * 60));
    let secDomani = Math.floor((differenza % (1000 * 60)) / 1000);
    timer.innerHTML =`il tempo mancante ${giorno}giorni ${oraDomani}:${minDomani}:${secDomani}`
    if (differenza<=0){
        clearInterval(controllo)
        timer.innerHTML='tempo finito'
    }
}
