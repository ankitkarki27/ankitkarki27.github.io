function submitForm(e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  console.log("Form submitted!");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  document.getElementById("confirmation").style.display = "block";

  // Clear fields
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}
