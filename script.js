
    function getFormvalue(event) {
      event.preventDefault(); // Prevent page reload on form submit

      // Access input values and trim extra spaces
      const firstName = document.querySelector('input[name="fname"]').value.trim();
      const lastName = document.querySelector('input[name="lname"]').value.trim();

      // Handle empty fields
      if (!firstName && !lastName) {
        alert("Please enter your name.");
        return;
      }

      const fullName = `${firstName} ${lastName}`.trim(); // Concatenate names
      alert(fullName);
    }

    // Attach function to form submit
    const form = document.getElementById('nameForm');
    form.addEventListener('submit', getFormvalue);

}
