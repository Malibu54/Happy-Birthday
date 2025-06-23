function calcularDias() {
    let hoy = new Date();
    let cumple = new Date(document.getElementById("cumple").value);
    
    let edad = hoy.getFullYear() - cumple.getFullYear();
    let yaCumplioEsteAnio = (hoy.getMonth() > cumple.getMonth()) ||
        (hoy.getMonth() === cumple.getMonth() && hoy.getDate() >= cumple.getDate());

    if (!yaCumplioEsteAnio) {
        edad--;
    }

    let siguienteCumple = new Date(hoy.getFullYear(), cumple.getMonth(), cumple.getDate());
    if (hoy > siguienteCumple) {
        siguienteCumple.setFullYear(hoy.getFullYear() + 1);
    }

    let unDia = 24 * 60 * 60 * 1000;
    let diasFaltantes = Math.ceil((siguienteCumple - hoy) / unDia);

    if (diasFaltantes === 0) {
        document.getElementById("resultados").innerText = "¡Feliz cumpleaños!";
    } else if (diasFaltantes && edad < 150) {
        document.getElementById("resultados").innerText = `En ${diasFaltantes} día(s), cumplirás ${edad + 1} años`;
    } else {
        document.getElementById("resultados").innerText = "Por favor ingresa una fecha válida";
    }
}
