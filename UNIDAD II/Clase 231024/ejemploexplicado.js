let task = ['comprar','estudiar','xd'];
console.log("Lista de tareas", task)

task.push("hola")
task.splice(1,1)
task.push("ir a casa")
 
//       Usando ForEach
let tareas = ['Estudiar','Comprar','xd'];

task.forEach((tareas, index)=>{
    console.log(`Tareas ${index} ; ${task} `)
});