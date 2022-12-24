function guardar() {
 
    let n = document.getElementById("txtNombre").value
    let a = parseFloat(document.getElementById("txtApellido").value)
    let m = parseInt(document.getElementById("txtMail").value)
    let c = parseInt(document.getElementById("txtClave").value)
 
    let producto = {
        nombre: n,
        apellido: a,
        mail: m,
        clave: c,
    }
    let url = "https://dafnecarp.pythonanywhere.com/usuarios"
    var options = {
        body: JSON.stringify(producto),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
       // redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Grabado")
            window.location.href = "./index.html";  //NUEVO  
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })
 
}
