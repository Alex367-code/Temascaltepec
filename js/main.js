// Espera a que el DOM esté listo
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Evita que se recargue la página

        // Obtener valores de los campos
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validación simple
        if (!name || !email || !subject || !message) {
            alert("Por favor completa todos los campos.");
            return;
        }

        // Aquí podrías enviar los datos a un servidor con fetch/AJAX
        // Ejemplo de simulación de envío:
        console.log("Datos enviados:", { name, email, subject, message });

        // Mostrar confirmación al usuario
        const successDiv = document.getElementById("success");
        successDiv.innerHTML = `
            <div class="alert alert-success mt-3">
                ¡Gracias ${name}! Tu mensaje ha sido enviado correctamente.
            </div>
        `;

        // Limpiar formulario
        form.reset();
    });
});
