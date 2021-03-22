// esto es una linea comentada y aparece en verde

/* y esto
    es un bloque comentado
    y tambien aparece en verde
*/

(() => {
    function funcioncita(parametr1, parametro2) {
        return parametr1 + parametro2;
    }

    let objetito = {
        attr1: 1,
        attr2: 'holiwisss',
        attr3: Date.now()
    }

    console.log(objetito)
});

(() => {
    class Silla {
        constructor(material, patas, tapizado){
            this.material = material,
            this.patas = patas
            this.tapizado = tapizado
        }

        aguantaPeso(peso) {
            console.log(`Soy una silla de ${this.material}, 
            con ${this.patas} patas 
            y estoy soportando un peso de ${peso}`)
        }
    }

    sillaPapa = new Silla('metal', 4, 'pana')
    sillaPapa.aguantaPeso(110)

    class Persona {
        constructor(nombre, apellido){
            this.nombre = nombre,
            this.apellido = apellido
        }

        static descript () {
            console.log(`Me llamo ${this.nombre}`)
        }
        descript () {
            console.log(`Me llamo ${this.nombre}`)
        }
        
    }


    Persona.descript()
    const Sol = new Persona('Sol', 'Vasquez')
    Sol.descript()


})()