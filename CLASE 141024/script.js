//Funciones
/*
function hello(){
console.log("hola js");
console.log("hola html");
console.log("hola css");
}

hello();
*/

/*function hello(){
    return "hola js"
} 
    const result= hello();
    //hello();

function hello(){
return 20;
}
console.log(hello(););

//returna el valor del objeto

function hello(){
    return {
        nombre:'Leonardo'
    }
}console.log(hello());*/

/*
function hello(){
    return function(){
        return'Hola JS'
    }
}console.log(hello()());*/

//------------USO DE PARAMETROS EN FUNCIONES------------------

/*function hellpconJS(name){
    return 'Hola '+ name;
}
console.log(hellpconJS('Leonardo'))*/

//Mas de un parametro a la funcion

/*function hellpconJS(x,y){
    return x+y;
}
console.log(hellpconJS(20,30))*/

//Control de errores en parametros

/*function hellpconJS(x,y){
    if(y == undefined){
        //y=0;
    }
    return x+y;
}
console.log(hellpconJS(20,3))*/

//==OBJETOS==
const user= {
    nombre: 'leonardo',
    apellidoM: 'Maldonado',
    edad : 16,
    edoCivil: 'separado',
    domicilio: {
        ciudad:'CDMX',
        calle: 'Boticelli',
        numero: 90
    },
    amigos: ['Jonathan', 'Arturo'],
    activo: true,
    sendMensaje: function(){
        return 'enviando msj'
    }

}


alert(user.domicilio.calle+' '+user.domicilio.ciudad+' '+user.domicilio.numero)
console.log(user.amigos[0]+' '+user.amigos[1])
alert(user.activo)
console.log(user.nombre+ ' '+user.apellidoM+ ' '+user.edoCivil)

//alert ciudad,calle, numero ..
//consola, los amigo
//alert (Activo o Dado baja)
//consola nombre, apellidos, estado civil