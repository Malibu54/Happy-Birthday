(function() {
    let hoy = new Date();
    document.getElementById("cumple").max = hoy.getFullYear() + "-" +
        (hoy.getMonth() + 1) + "-" + (hoy.getDate() < 10 ? ("0" + (hoy.getDate() - 1)) : (hoy.getDate() - 1));
})();

function calcularDias() {
    let hoy = new Date();
    let cumple = new Date(document.getElementById("cumple").value);
    let edad = hoy.getFullYear() - cumple.getFullYear();
    let siguienteCumple = new Date(hoy.getFullYear(), cumple.getMonth(), cumple.getDate());

    if (hoy > siguienteCumple) {
        siguienteCumple.setFullYear(hoy.getFullYear() + 1);
    }
    let unDia = 24 * 60 * 60 * 1000;
    let diasFaltantes = Math.ceil((siguienteCumple.getTime() - hoy.getTime()) / (unDia));
    if (diasFaltantes === 364) {
        document.getElementById("resultados").innerText = "Feliz cumpleaños!";
    } else if (diasFaltantes && edad < 150) {
        document.getElementById("resultados").innerText = `En ${diasFaltantes} dia(s), tendras ${edad} años`;
    } else {
        document.getElementById("resultados").innerText = "Por favor ingresa una fecha valida";
    }
}