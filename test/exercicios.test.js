const { somar } = require('../service/exercicios')
const { describe, it, expect } = require ('@jest/globals')

describe('Testes função soma', ()=>{
    //faz os it's(testes)

    it('soma de dois números positivos',()=>{
        const resultado = somar(1, 2);

        //console.log(resultado)
        expect(resultado).toBe(3)
    })

    it('soma de um número negativo e outro positivo',()=>{
        const resultado = somar(-1, 2);

        //console.log(resultado)
        expect(resultado).toBe(1)
    })

    it('soma de um número postivo e outro negativo',()=>{
        const resultado = somar(1, -2);

        //console.log(resultado)
        expect(resultado).toBe(-1)
    })

    it('soma de um número postivo e outro negativo',()=>{
        const resultado = somar(1, -2);

        //console.log(resultado)
        expect(resultado).toBe(-1)
    })


})


describe('Testes função calcsalario', ()=>{
    //faz os it's(testes)
    
})

describe('Testes função soma', ()=>{
    //faz os it's(testes)
    
})