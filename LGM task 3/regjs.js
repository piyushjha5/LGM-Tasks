function displayFormData() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var website = document.getElementById("website").value;
  var imageLink = document.getElementById("imageLink").value;
  var gender = document.querySelector('input[name="gender"]:checked');
  var skills = document.querySelectorAll('input[name="skills"]:checked');

  var displayData = document.createElement("div");
  displayData.innerHTML = "<strong>Name:</strong> " + name + "<br>";
  displayData.innerHTML += "<strong>Email:</strong> " + email + "<br>";
  displayData.innerHTML += "<strong>Website:</strong> " + website + "<br>";
  displayData.innerHTML += "<strong>Image Link:</strong> " + imageLink + "<br>";
  displayData.innerHTML += "<strong>Gender:</strong> " + (gender ? gender.value : "") + "<br>";
  displayData.innerHTML += "<strong>Skills:</strong> ";

  var skillsArray = [];
  for (var i = 0; i < skills.length; i++) {
      skillsArray.push(skills[i].value);
  }
  displayData.innerHTML += skillsArray.join(", ") + "<br><br>";

  document.getElementById("displayData").appendChild(displayData);
  document.getElementById("registrationForm").reset();
}

function clearForm() {
  document.getElementById("registrationForm").reset();
  document.getElementById("displayData").innerHTML = "";
}