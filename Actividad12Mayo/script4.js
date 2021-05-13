function imprimir (){
    let esVacio = false;
    
    let name = document.getElementById("userName").value;
    let surname = document.getElementById("UserSurname").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("exampleInputEmail1").value;

    age = parseInt(age)

    let formulario = [name, surname, age, email]

    console.log(formulario);
    for (let i = 0; i < formulario.length; i++) {
        if (formulario[i] === "") {
            esVacio = true;
        }
    }
    if (esVacio === true) {
        alert("Por favor llene los campos")
    }

    if (age >= 18 && esVacio === false){
        alert(`Hola ${name} ${surname}, has aplicado correctamente, te contactaremos en ${email}`)
    }
    else if (age < 18 && esVacio === false){
        alert(`Hola ${name} ${surname}, no cumples con la edad requerida`)
    }

}