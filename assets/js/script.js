window.addEventListener("keydown", (e) => {
  const key = document.getElementById("keyPressed");
  const which = document.getElementById("keyNum");
  const code = document.getElementById("keyCode");
  const generated = document.getElementById("generated");

  key.innerText = e.key;
  which.innerText = e.which;
  code.innerText = e.code;
  generated.innerText = e.which;
});
