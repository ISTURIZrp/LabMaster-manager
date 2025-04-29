// Control de usuarios con permisos
const users = [{ username: "ISTURIZ", password: "EDELMIRA89", role: "admin" }];

function agregarUsuario(nombre, clave, rol) {
  users.push({ username: nombre, password: clave, role: rol });
}
