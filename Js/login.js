function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  if (user === "ISTURIZ" && pass === "EDELMIRA89") {
    window.location.href = "index.html";
  } else {
    alert("Credenciales incorrectas");
  }
}
