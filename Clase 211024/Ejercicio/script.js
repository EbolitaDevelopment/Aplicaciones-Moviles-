let arrTareas = [];


document.getElementById("formulario").addEventListener("submit", (e) => {
    e.preventDefault();
    const tarea = document.getElementById("inputTarea").value.trim(); 

    if (tarea) {
        AgregarTarea(tarea); 
        Mostrar();
        document.getElementById("inputTarea").value = '';
    }
    if(tarea == ''){
        alert("No se le esta asignando ningun valor a la tarea")
    }
});


let AgregarTarea = (tarea) => {
    arrTareas.push(tarea);
    console.log(arrTareas); 
};


let EliminarTarea = (index) => {
    arrTareas.splice(index, 1); 
    let verificaion = confirm('Seguro que deseas eliminar la tarea?')
    if(verificaion == true){
    Mostrar();}
};


let Mostrar = () => {
    const listaTareasDiv = document.getElementById("listaTareas");
    listaTareasDiv.innerHTML = ''; 

    arrTareas.forEach((tarea, index) => {
        const tareaDiv = document.createElement("div");
        tareaDiv.textContent = tarea;
       
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.onclick = () => EliminarTarea(index); 

        tareaDiv.appendChild(botonEliminar);
        listaTareasDiv.appendChild(tareaDiv);
    });
};