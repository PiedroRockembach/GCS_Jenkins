function gerarListaPar(number) {
    let listaPar = [];
    for (let i = 1; i <= number; i++) {
        if (i % 2 === 0) {
            listaPar.push(i);
        }
    }
    return listaPar;
}

module.exports = { gerarListaPar };