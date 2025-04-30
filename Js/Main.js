document.addEventListener('DOMContentLoaded', () => {
  const inventario = JSON.parse(localStorage.getItem('inventario')) || [];
  const equipos = JSON.parse(localStorage.getItem('equipos')) || [];

  document.getElementById('totalInventario').textContent = inventario.length;

  let alertas = 0;
  const hoy = new Date();
  inventario.forEach(item => {
    const caducidad = new Date(item.caducidad);
    const dias = Math.floor((caducidad - hoy) / (1000 * 60 * 60 * 24));
    if (dias <= 15 || parseInt(item.cantidad) <= 3) alertas++;
  });
  document.getElementById('alertasActivas').textContent = alertas;

  const mantenimiento = equipos.filter(e => {
    const fecha = new Date(e.mantenimiento);
    return fecha <= hoy;
  });
  document.getElementById('equiposMantenimiento').textContent = mantenimiento.length;
});