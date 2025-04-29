// Control de inventario con lotes y fechas de caducidad
const inventory = [];

function agregarProducto(nombre, cantidad, lote, caducidad) {
  const existente = inventory.find(p => p.nombre === nombre && p.lote === lote);
  if (existente) {
    existente.cantidad += cantidad;
  } else {
    inventory.push({ nombre, cantidad, lote, caducidad });
  }
}
