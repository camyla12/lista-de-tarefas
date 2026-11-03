const formulario = document.getElementById("form-tarefa");
const campo = document.getElementById("nova-tarefa");
const lista = document.getElementById("lista-tarefas");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const texto = campo.value.trim();

    if (texto === "") {
        return;
    }

    const item = document.createElement("li");
    const tarefa = document.createElement("span");
    const concluir = document.createElement("button");
    const excluir = document.createElement("button");

    tarefa.textContent = texto;

    concluir.textContent = "Concluir";
    concluir.onclick = function() {
        item.classList.toggle("concluida");
    };

    excluir.textContent = "Excluir";
    excluir.className = "excluir";
    excluir.onclick = function() {
        item.remove();
    };

    item.append(tarefa, concluir, excluir);
    lista.appendChild(item);

    campo.value = "";
});
