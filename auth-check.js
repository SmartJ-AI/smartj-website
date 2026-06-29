const uid = localStorage.getItem("firebase_uid");

if (!uid) {
  window.location.href = "register.html";
}
