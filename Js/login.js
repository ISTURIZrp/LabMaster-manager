document.getElementById('form-login').addEventListener('submit', function (e) {
  e.preventDefault();
  const usuario = document.getElementById('usuario').value;
  const clave = document.getElementById('clave').value;

  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  const user = usuarios.find(u => u.usuario === usuario && u.clave === clave);

  if (user) {
    alert(`Bienvenido, ${user.usuario}`);
    window.location.href = 'index.html';
  } else {
    alert('Credenciales incorrectas');
  }
});