function asistencia() {
    let EPresente = document.getElementById("respuesta").value;
    
    if (EPresente === "presente") {
        alert("El estudiante esta presente");
    }
    else {
        alert("El estudiante no asistio");
    }
}