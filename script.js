function setup() {
    noCanvas();
}

function draw() {
    let hora = hour() % 12
    let minuto = minute()
    let segundo = second()
    select("#texto-hora-digital").html(`
        ${(hora + "").padStart(2, 0)}:${(minuto + "").padStart(2, 0)}:${(segundo + "").padStart(2, 0)}
    `)
    select("#horas").style("transform", `rotate(${360 * hora / 12}deg)`)
    select("#minutos").style("transform", `rotate(${360 * minuto / 60}deg)`)
    select("#segundos").style("transform", `rotate(${360 * segundo / 60}deg)`)
}