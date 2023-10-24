$(document).ready(function () {
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

        $(".page").not("#1").hide();

        $(".btnPage").click(function (event) {
            event.preventDefault();
            var targetPageId = $(this).attr("href");
            $(".page").hide();
            $(targetPageId).show();
        });

        var input1 = $('<input>', {
            type: 'checkbox',
            name: 'Desayuno',
            value: 'gallo pinto',
            'data-price': '10.00'
        });
        var input2 = $('<input>', {
            type: 'checkbox',
            name: 'Desayuno',
            value: 'Pancakes',
            'data-price': '10.00'
        });
        var input3 = $('<input>', {
            type: 'checkbox',
            name: 'Desayuno',
            value: 'Emparedado',
            'data-price': '10.00'
        });

        $('.input1').append(input1);
        $('.input2').append(input2);
        $('.input3').append(input3);

        $("#Page1_H1_1").text("Desayuno");
        $("#Page1_img1").attr("src", "css/Imagenes/imgDesayuno/gallo-pinto.gif");
        $("#Page1_H2_1").text("Gallo Pinto");
        $("#Page1_p_1").text("Incluye huevos, tostada y natilla");
        $("#Page1_img2").attr("src", "css/Imagenes/imgDesayuno/pancakes.png");
        $("#Page1_H2_2").text("Pancakes");
        $("#Page1_p_2").text("Cubiertos en miel de maple");
        $("#Page1_img3").attr("src", "css/Imagenes/imgDesayuno/emparedado.png");
        $("#Page1_H2_3").text("Emperadado");
        $("#Page1_p_3").text("Con jamón y queso");
        $("fieldset").hide();

        $("#Page2_img1").attr("src", "css/Imagenes/imgDesayuno/frutas.png");
        $("#Page2_H2_1").text("Bowl de Frutas");
        $("#Page2_value1").val("Bowl de Frutas");
        $("#Page2_img2").attr("src", "css/Imagenes/imgDesayuno/yugurt.png");
        $("#Page2_H2_2").text("Yugurt con Granola");
        $("#Page2_value1").val("Yugurt con Granola");
        $("#Page2_img3").attr("src", "css/Imagenes/imgDesayuno/avena.png");
        $("#Page2_H2_3").text("Atol de Avena");
        $("#Page2_value1").val("Atol de Avena");

        $("#Page4_img1").attr("src", "css/Imagenes/imgDesayuno/postre_1.gif");
        $("#Page4_H2_1").text("Croissant");
        $("#Page4_value1").val("Croissant");
        $("#Page4_img2").attr("src", "css/Imagenes/imgDesayuno/postre_2.gif");
        $("#Page4_H2_2").text("Waffle con fresas");
        $("#Page4_value1").val("Waffle con fresas");
        $("#Page4_img3").attr("src", "css/Imagenes/imgDesayuno/postre_3.gif");
        $("#Page4_H2_3").text("Pie de Chocolate");
        $("#Page4_value1").val("Pie de Chocolate");
    }


    function mostrarAlmuerzo() {
        $(".menu-item").show(); // Muestra todos los elementos de almuerzo
    }

    function mostrarCena() {
        $(".menu-item").show(); // Muestra todos los elementos de cena
    }
});
