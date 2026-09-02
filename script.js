const cronogramaData = {
"Semana 1": ["Lunes: Importancia del ambiente", "Martes: Comunidad verde", "Miércoles: Basura y contaminación"],
"Semana 2": ["Lunes: Separación de residuos", "Martes: Reciclaje de materiales", "Miércoles: Impacto del reciclaje"],
"Semana 3": ["Lunes: Reutilización de materiales", "Martes: Beneficios de reutilizar", "Miércoles: Ejemplos prácticos"],
"Semana 4": ["Lunes: Importancia del agua", "Martes: Contaminación del agua", "Miércoles: Ahorro de agua"],
"Semana 5": ["Lunes: Uso responsable de electricidad", "Martes: Energías renovables", "Miércoles: Reducir consumo"],
"Semana 6": ["Lunes: Ambiente limpio y salud", "Martes: Enfermedades por contaminación", "Miércoles: Hábitos saludables"],
"Semana 7": ["Lunes: Biodiversidad local", "Martes: Animales afectados", "Miércoles: Plantas útiles"],
"Semana 8": ["Lunes: Valores comunitarios", "Martes: Responsabilidad ciudadana", "Miércoles: Comunidades verdes exitosas"],
"Semana 9": ["Lunes: Tecnología para reciclaje", "Martes: Apps ecológicas", "Miércoles: Internet y ambiente"],
"Semana 10": ["Lunes: Resumen de aprendizajes", "Martes: Evaluación comunitaria", "Miércoles: Presentación final"]
};

const cronogramaDiv = document.getElementById("cronograma");

// 🔹 Cargar estado guardado
const savedChecks = JSON.parse(localStorage.getItem("checks")) || {};

for (let semana in cronogramaData) {
const semanaDiv = document.createElement("div");
semanaDiv.className = "semana";
semanaDiv.textContent = semana;

const diasDiv = document.createElement("div");
diasDiv.className = "dias";
diasDiv.style.display = "none";

cronogramaData[semana].forEach((diaTexto, index) => {
const diaDiv = document.createElement("div");
diaDiv.className = "dia";

const checkbox = document.createElement("input");
checkbox.type = "checkbox";

// 🔹 Restaurar estado si estaba guardado
if (savedChecks[`${semana}-${index}`]) {
checkbox.checked = true;
}

const texto = document.createElement("span");
texto.textContent = diaTexto;

checkbox.addEventListener("change", () => {
// 🔹 Guardar estado al marcar/desmarcar
savedChecks[`${semana}-${index}`] = checkbox.checked;
localStorage.setItem("checks", JSON.stringify(savedChecks));
});

diaDiv.appendChild(checkbox);
diaDiv.appendChild(texto);
diasDiv.appendChild(diaDiv);
});

semanaDiv.addEventListener("click", () => {
diasDiv.style.display = diasDiv.style.display === "flex" ? "none" : "flex";
});

semanaDiv.appendChild(diasDiv);
cronogramaDiv.appendChild(semanaDiv);
}
function mostrarHora() {
const ahora = new Date();
let horas = ahora.getHours();
const minutos = String(ahora.getMinutes()).padStart(2, '0');
const segundos = String(ahora.getSeconds()).padStart(2, '0');
const ampm = horas >= 12 ? 'PM' : 'AM';
  horas = horas % 12 || 12; // convierte a formato 12 horas
document.getElementById("hora").textContent = `${horas}:${minutos}:${segundos} ${ampm}`;
}

setInterval(mostrarHora, 1000);
mostrarHora();
