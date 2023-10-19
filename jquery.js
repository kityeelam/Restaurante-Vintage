$(document).ready(function () {
    // Obtén el valor del parámetro 'comida' de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const comida = urlParams.get('comida');

    if (comida === 'desayuno') {
        mostrarDesayuno();
    } else if (comida === 'almuerzo') {
        mostrarAlmuerzo();
    } else if (comida === 'cena') {
        mostrarCena();
    }
    function mostrarDesayuno() {
        $(".menu-item").hide();

        $("#Page1_img1").attr("src", "css/Imagenes/imgDesayuno/gallo-pinto.gif");
        $("#Page1_H2_1").text("Gallo Pinto");
        $("#Page1_img2").attr("src", "css/Imagenes/imgDesayuno/pancakes.png");
        $("#Page1_H2_2").text("Pancakes");
        $("#Page1_img3").attr("src", "css/Imagenes/imgDesayuno/emparedado.png");
        $("#Page1_H2_3").text("Emperadado");
        $("fieldset").hide();

        $("#Page2_img1").attr("src", "css/Imagenes/imgDesayuno/frutas.png");
        $("#Page2_H2_1").text("Bowl de Frutas");
        $("#Page2_img2").attr("src", "css/Imagenes/imgDesayuno/yugurt.png");
        $("#Page2_H2_2").text("Yugurt con Granola");
        $("#Page2_img3").attr("src", "css/Imagenes/imgDesayuno/avena.png");
        $("#Page2_H2_3").text("Atol de Avena");

        $("#Page4_img1").attr("src", "css/Imagenes/imgDesayuno/postre_1.gif");
        $("#Page4_H2_1").text("");
        $("#Page4_img2").attr("src", "css/Imagenes/imgDesayuno/postre_2.gif");
        $("#Page4_H2_2").text("");
        $("#Page4_img3").attr("src", "css/Imagenes/imgDesayuno/postre_3.gif");
        $("#Page4_H2_3").text("");
    }


    function mostrarAlmuerzo() {
        $(".menu-item").show(); // Muestra todos los elementos de almuerzo
    }

    function mostrarCena() {
        $(".menu-item").show(); // Muestra todos los elementos de cena
    }
});
