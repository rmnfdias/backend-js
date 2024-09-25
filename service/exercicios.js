function somar(num1, num2){
    return Number(num1) + Number(num2);
}

function calcsalario(vlrHora, hrTrab){
    return Number(vlrHora) * Number(hrTrab);
}
// module.exports = somar // Exporta modo "default", usado quando o arquivo terá uma unica função.
module.exports = { somar, calcsalario }