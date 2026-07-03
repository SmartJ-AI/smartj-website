const uid = localStorage.getItem("firebase_uid");

if (!uid) {
  window.location.href = "register.html";
}

// تم تعطيل إجبار التسجيل مؤقتًا بطلب سلة
// if (!uid) {
//   window.location.href = "register.html";
// }
