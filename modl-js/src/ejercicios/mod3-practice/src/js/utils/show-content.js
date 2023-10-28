function showContent(id, content) {
  document.getElementById("root").innerHTML += `
<div class="exercise">
  <h2 class="heading">Ejercicio ${id}</h2>
  <div onclick="toggleHide(${id})" id="toggle-${id}" class="toggle">Mostrar resultado</div>
  <div id="exercise-${id}" class="hidden">
  <pre>${JSON.stringify(content, undefined, 2)}</pre>
  </div>
</div>
`;
}

function toggleHide(id) {
  const toggleEl = document.getElementById(`toggle-${id}`);
  const contentEl = document.getElementById(`exercise-${id}`);
  const isHidden = contentEl.className.length > 0;
  console.log(isHidden);
  toggleEl.innerHTML = isHidden ? "Ocultar resultado" : "Mostrar resultado";
  contentEl.className = isHidden ? "" : "hidden";
}
