function getFormvalue() {
    const fname = document.querySelector('input[name="fname"]').value.trim();
    const lname = document.querySelector('input[name="lname"]').value.trim();

    alert(fname + " " + lname);

    // Prevent page reload so Cypress can catch the alert
    return false;
}
