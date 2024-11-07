const { gerarListaPar } = require('../../src/script/util/helper2');

test('gerarListaPar deve retornar uma lista de números pares até o número fornecido', () => {
    expect(gerarListaPar(20)).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
    expect(gerarListaPar(10)).toEqual([2, 4, 6, 8, 10]);
    expect(gerarListaPar(1)).toEqual([]);
    expect(gerarListaPar(0)).toEqual([]);
});