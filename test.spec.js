import {describe, expect, it} from 'vitest';
const {algo,precio_modificado}=require("./modifica");
const es_numero=(algo)=> /^[0-9]*$/.test(algo);
// const es_numero=(algo)=> /^[0-9]*$/.test(algo);
console.log('es_numero("12d3")')
console.log(es_numero("12d3"))
// console.log(algo())
// const regex = /^[0-9]*$/;

// const {describe,it,expect} =require("vitest");
describe("algo",()=>{
    it("funcion que espero es que de numero",()=>{
        expect(algo()).toBe(10);
    });
});
describe("precio_modificado",()=>{
    it("si es menor a 2000 que sea 2000",()=>{
        expect(precio_modificado({precio:1999})).toBe(2000);
    });
    it("si es mayor a 2000 que baje 1%",()=>{
        expect(precio_modificado({precio:2100})).toBe("2079.00");
        expect(precio_modificado({precio:"2100"})).toBe("2079.00");
        console.log('typeof precio_modificado({precio:"2100"})')
        console.log('typeof precio_modificado({precio:"2100"})')
        console.log('typeof precio_modificado({precio:"2100"})')
        console.log(typeof precio_modificado({precio:"2100"}))
        console.log(typeof precio_modificado({precio:"2100"}))
        console.log('typeof precio_modificado({precio:"2100"})')
        console.log('typeof precio_modificado({precio:"2100"})')
        console.log('typeof precio_modificado({precio:"2100"})')
        console.log('typeof precio_modificado({precio:"2100"})')
        console.log('typeof precio_modificado({precio:"2100"})')
        expect(precio_modificado({precio:"2100"})).toBe(2079.00);
    });
});



describe("es_numero",()=>{
    it("ver si es falso d123",()=>{
        // expect(()=>es_numero("123")).toBeTruthy();
        // expect(()=>es_numero("d123")).toBeTruthy();
        expect(es_numero("d123")).toBeFalsy();
    });
    it("ver si es verdad que 123 es numero",()=>{
        expect(es_numero("123")).toBeTruthy();
        // expect(()=>es_numero("d123")).toBeTruthy();
    });
});
