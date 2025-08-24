// Script para index.html
const form = document.getElementById("form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = document.getElementById("inputName").value.trim();
  const email = document.getElementById("inputEmail").value.trim();
  const message = document.getElementById("inputMessage").value.trim();

  // Validación mínima en frontend
  if (!name || !email || !message) {
    alert("Todos los campos son obligatorios");
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/api/form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    const result = await response.json();

    if (response.ok) {
      alert("Datos enviados correctamente ✅");
      form.reset(); // limpiar formulario
    } else {
      alert("Error: " + result.error);
    }
  } catch (err) {
    console.error(err);
    alert("Error al conectar con el servidor");
  }
});


