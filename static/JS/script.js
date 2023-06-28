const contact_obj = {
    "Contact": "7006621947",
    "Email ID": "tahu321.th@gmail.com",
    "Linkedin Url": "https://www.linkedin.com/in/tahir-hussain-383812222"
}

function copyToClipboard(value) {


    navigator.clipboard.writeText(contact_obj[value]);

    let alert = `${value} copied to clipboard!`;

    let alertbox = document.getElementById('snackbar');
    alertbox.innerText = alert;

    showAlert()
}

function showAlert() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

