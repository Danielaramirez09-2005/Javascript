function imprimir(){

    let impresion = ""
    impresion = document.getElementById("name").value + "\n"
    impresion += document.getElementById("lastName").value + "\n"
    impresion += document.getElementById("age").value + "\n"
    impresion += document.getElementById("course").value + "\n"

    alert(impresion)
    alert("Hola " + "a " + "todos")
}

console.log("Funcionando") 