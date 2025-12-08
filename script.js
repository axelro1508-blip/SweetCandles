
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const telefonoInput = document.getElementById('telefono');

    form.addEventListener('submit', (event) => {
       
        event.preventDefault(); 

        const cantidad = document.getElementById('cantidad').value;
        if (parseInt(cantidad) < 1) {
            alert('La cantidad de velas debe ser al menos 1.');
            return;
        }

        const telefonoPattern = /^[0-9]{3}-?[0-9]{3}-?[0-9]{4}$/;
        if (!telefonoPattern.test(telefonoInput.value)) {
            alert('Por favor, ingresa un número de teléfono válido (Ej: 555-1234-5678).');
            return;
        }

        alert('✅ ¡Pedido validado con éxito! (El formulario no se enviará realmente en este ejemplo).');
    });
});