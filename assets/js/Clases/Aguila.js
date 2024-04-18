import { Animal } from "./Animal.js";

export class Aguila extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
        }

    Chillar() {
        return this._sonido;
    }

}