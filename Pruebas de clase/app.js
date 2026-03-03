const btnCargar=document.getElementById("btnCargar");
btnCargar.addEventListener("click",()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then(json=> {
    let datos=document.getElementById("datos"); 
    let texto="";
    json.forEach(usr => {
            texto += `
            <div class="card mb-3">
              <div class="card-body">
                <h5 class="card-title">${usr.name}</h5>
                <p class="card-text">${usr.website}</p>
              </div>
            </div>`;
        });
        datos.innerHTML=texto;
    })
})