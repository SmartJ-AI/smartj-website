const savedDarkMode =
  localStorage.getItem(
    "dark_mode"
  );

if (savedDarkMode === "true") {

  document.body.classList.add(
    "dark"
  );

}
