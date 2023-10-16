let containerActivo = 1

const containers = document.querySelectorAll(".container_1")
const containers_2 = document.querySelectorAll(".container_2")


containers.forEach (( container_1, indice) => {
    container_1.addEventListener ( "click" , function() {
        cambiarContainer(indice)
    })
})
containers_2.forEach (( container_2, indice) => {
    container_2.addEventListener ( "click" , function() {
        cambiarContainer_2(indice)
    })
})
function cambiarContainer(indice) {
    containers[containerActivo].classList.remove("activa")
    containers[indice].classList.add("activa")
    containerActivo = indice
}
function cambiarContainer_2(indice) {
    containers_2[containerActivo].classList.remove("activa")
    containers_2[indice].classList.add("activa")
    containerActivo = indice
}

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const facturaSection = document.getElementById("factura");
const orderDetailsDiv = document.getElementById("order-details");
const totalP = document.getElementById("total-price");

// cambiar pag

function goToPage(pageId) {
  // Ocultar todas las páginas
  const pages = document.querySelectorAll('.page');
  pages.forEach((page) => {
      page.style.display = 'none';
  });

  // Mostrar la página especificada
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
      targetPage.style.display = 'block';
  }
}
// part_1

document.addEventListener("DOMContentLoaded", function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateTotal);
    });

    function updateTotal() {
        let totalPrice = 0;
        let totalAcompaniamiento = 0;
        let totalBebidas = 0;
        let totalPostres = 0;
        let total = 0;
        const selectedItems = [];
        const selectedAcompaniamientos = [];
        const selectedBebidas = [];
        const selectedPostres = [];
    
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                const price = parseFloat(checkbox.getAttribute('data-price'));
                totalPrice += price;
                selectedItems.push(checkbox.value);
    
                if (checkbox.name === 'Acompañamiento') {
                    totalAcompaniamiento += price;
                    selectedAcompaniamientos.push(checkbox.value);
                }
                if (checkbox.name === 'Fresco') {
                    totalBebidas += price;
                    selectedBebidas.push(checkbox.value);
                }
                if (checkbox.name === 'Postre') {
                    totalPostres += price;
                    selectedPostres.push(checkbox.value);
                }
            }
        });
        
        total = totalPrice + totalAcompaniamiento + totalBebidas + totalPostres;

        document.getElementById('total').textContent = total.toFixed(2);
        document.getElementById('platoPrincipalPrecio').textContent = totalPrice.toFixed(2);
        document.getElementById('acompañamientoPrecio').textContent = totalAcompaniamiento.toFixed(2);
        document.getElementById('bebidaPrecio').textContent = totalBebidas.toFixed(2);
        document.getElementById('postrePrecio').textContent = totalPostres.toFixed(2);
        console.log(selectedItems);
        console.log(selectedAcompaniamientos);
        console.log(selectedBebidas);
        console.log(selectedPostres);
    
        const seleccionesDiv = document.getElementById('selecciones');
        seleccionesDiv.innerHTML = `
            <p>Pedido: ${selectedItems.join(', ')}</p>
        `;
    }
});

