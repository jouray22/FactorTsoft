// Referencia al archivo JSON
const urlArchivo = "ListadoIntegralPPM.json"

// Referencias a los select
 const clienteSelect =  document.getElementById("cliente");
 const servicioSelect =  document.getElementById("servicio");
 const infoServicios = document.getElementById("datos-container");
 const id = document.getElementById("id");
 
function listarServicios(){
  fetch(urlArchivo)
    .then(response => response.json())
    .then(data => {
        // Obtener listado de clientes
        /*
        const listadoClientes = [...new Set(data.map(item => item["Nombre Proyecto"]))];  
        clientes = [];
        
        listadoClientes.forEach(listadoClientes => {
          let partes = listadoClientes.split(' - ');
          let cliente = partes[0].trim(); // Obtenemos el primer elemento y eliminamos espacios en blanco extra
          clientes.push(cliente);
        });*/

        // Eliminar clientes duplicados del arreglo
        const listaSinDuplicados = Array.from(new Set(data.map(item => item._source.Cliente)));
        //const listaSinDuplicados = Array.from(new Set(clientes));

        //Organizar alfabeticamente la lista
        listaSinDuplicados.sort();  
        
        // Llenar el combo de clientes con opciones únicas        
        listaSinDuplicados.forEach(cliente => {
            const option = document.createElement("option");
            option.value = cliente; 
            option.textContent = cliente;
            clienteSelect.appendChild(option);  
        });

       // Agregar un manejador de eventos para el cambio en el combo de clientes
        clienteSelect.addEventListener("change", () => {
        const clienteSeleccionado = clienteSelect.value;
        //clienteSelect.disabled = true;
        servicioSelect.disabled = false;

          // Filtrar servicios por cliente seleccionado
          function filtrarPorCliente(data) {
            return data._source["Nombre Proyecto"].startsWith(clienteSeleccionado);
          }

          const proyectosFiltrados = [...data].filter(filtrarPorCliente);

          // Mostrar el nombre de proyecto de los proyectos filtrados
          proyectosFiltrados.forEach(data => {
            const option = document.createElement("option");
            option.textContent = (data._source["Nombre Proyecto"]);
            servicioSelect.appendChild(option);
          });
          
          // Agregar un manejador de eventos para el cambio en el combo de servicios
          servicioSelect.addEventListener("change", () => {
          const servicioSeleccionado = servicioSelect.value;
          servicioSelect.disabled = true;

            // Filtrar servicios por clientes seleccionado
          function filtrarPorServicio(proyectosFiltrados) {
            return proyectosFiltrados._source["Nombre Proyecto"].includes(servicioSeleccionado);
          }
          const servicioFiltrado = proyectosFiltrados.filter(filtrarPorServicio);
          
          // Mostrar informacion del servicio seleccionado
          infoServicios.innerHTML = "";
          servicioFiltrado.forEach(data => {
            const elemento = document.createElement("p");
            elemento.textContent = "Lider de Proyecto: " + data._source.Líder;
            infoServicios.appendChild(elemento);
          });

          servicioFiltrado.forEach(data => {
                const elemento = document.createElement("p");
                elemento.textContent = "Filial: " + data._source.Filial;
                infoServicios.appendChild(elemento);
            });

          servicioFiltrado.forEach(data => {
              id.innerHTML = "";
              document.getElementById("id").value = ""
              document.getElementById("id").value = data._source.ID
          });
        
          servicioFiltrado.forEach(data => {
            oportunidad.innerHTML = "";
            document.getElementById("oportunidad").value = ""
            document.getElementById("oportunidad").value = data._source["N. OPP"];
          });
          
          servicioFiltrado.forEach(data => {
            const elemento = document.createElement("p");
            elemento.textContent = "Fecha Inicio: " + data._source["Inicio Plan."];
            infoServicios.appendChild(elemento);
          });

          servicioFiltrado.forEach(data => {
            const elemento = document.createElement("p");
            elemento.textContent = "Fecha Fin: " + data._source["Fin Plan."];
            infoServicios.appendChild(elemento);
          });
          
        });
    }) // Cierre del manejador de eventos
  })
    
} // Cierre funcion listar servicios()

listarServicios();



document.getElementById('form1').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevenir el comportamiento predeterminado de enviar el formulario

  var id = document.getElementById('id').value;
  var oportunidad = document.getElementById('oportunidad').value;
  var estrategia = document.getElementById('estrategia').value;
  var desafio = document.getElementById('desafio').value;
  var solucion = document.getElementById('solucion').value;
  var resultados = document.getElementById('resultados').value;
  var usuario = document.getElementById('usuario').value;
  var abordaje = document.getElementById('abordaje').value;
  var antecedentes = document.getElementById('antecedentes').value;
  var valor = document.getElementById('valor').value;
  var campañas = document.getElementById('campañas').value;
  var iniciativa = document.getElementById('iniciativa').value;
  var comentarios = document.getElementById('comentarios').value;
  var equipo = document.getElementById('equipo').value;
  var situacion = document.getElementById('situacion').value;
  var dolores = document.getElementById('dolores').value;
  var requerimiento = document.getElementById('requerimiento').value;
  var soluciones = document.getElementById('soluciones').value;
  var beneficio = document.getElementById('beneficio').value;
  var identificador = document.getElementById('identificador').value;
  var contribucion = document.getElementById('contribucion').value;
  var logros = document.getElementById('logros').value;
  var ejecucion = document.getElementById('ejecucion').value;
  var satisfaccion = document.getElementById('satisfaccion').value;
  var leccion = document.getElementById('leccion').value;
  var accion = document.getElementById('accion').value;
  var condicion = document.getElementById('condicion').value;
  var fechaActual = new Date();

  // Crear un objeto JSON
  var datosJSON = {
    "ID" : parseInt(id),
    "Oportunidad": oportunidad,
    "Estrategia": estrategia,
    "Desafio": desafio,
    "Solucion" : solucion,
    "Resultados" : resultados,
    "Usuario": usuario,
    "Abordaje" : abordaje,
    "Antecedentes" : antecedentes,
    "Valor" : valor,
    "Campañas" : campañas,
    "Iniciativa" : iniciativa,
    "Comentarios" : comentarios,
    "Equipo" : equipo,
    "Situacion" : situacion,
    "Dolores" : dolores,
    "Requerimiento" : requerimiento,
    "Soluciones" : soluciones,
    "Beneficio" : beneficio,
    "Identificador" : identificador,
    "Contribucion" : contribucion,
    "Logros" : logros,
    "Ejecucion" : ejecucion,
    "Satisfaccion" : satisfaccion,
    "Leccion" : leccion,
    "Accion": accion,
    "Condicion" : condicion,
    "Fecha" : fechaActual

  };
  // Convertir a JSON
  var datosJSONString = JSON.stringify(datosJSON);

  // Puedes hacer lo que quieras con datosJSONString aquí (enviar a un servidor, almacenar en localStorage, etc.)
  console.log(datosJSONString);


  // Crear un enlace de descarga
  var enlace = document.createElement("a");
  enlace.href = "data:text/json;charset=utf-8," + encodeURIComponent(datosJSONString);
  enlace.download = "datos.json";
  enlace.style.display = "none";
  document.body.appendChild(enlace);

  // Simular un clic para descargar el archivo
  enlace.click();

  // Limpiar el enlace
  document.body.removeChild(enlace);

});