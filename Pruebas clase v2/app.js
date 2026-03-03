let usuariosAPI = [];
const selectUsuario = document.getElementById("selectUsuario");
const datos = document.getElementById("datos");

document.getElementById("btnCargar").addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(json => {
            usuariosAPI = json;
            selectUsuario.innerHTML = '<option value="">-- Elige un usuario --</option>' + 
                json.map(u => `<option value="${u.id}">${u.name}</option>`).join('');
        });
});

selectUsuario.addEventListener("change", (e) => {
    const u = usuariosAPI.find(usr => usr.id == e.target.value);
    
    datos.innerHTML = u ? `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${u.name}</h5>
                <p class="card-text"><strong>Email:</strong> ${u.email}</p>
                <p class="card-text"><strong>Teléfono:</strong> ${u.phone}</p>
                <p class="card-text"><strong>Website:</strong> ${u.website}</p>
                <p class="card-text"><strong>Empresa:</strong> ${u.company.name}</p>
            </div>
        </div>` : "";
});