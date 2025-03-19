function generatePassword() {
    let length = document.getElementById("length").value;
    if (!length || length < 8 || length > 64) {
        alert("Please enter a password length between 8 and 64.");
        return;
    }

    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const num = "0123456789";
    const special = "@#$%&*";
    const allChars = lower + upper + num + special;

    let password = "";
    for (let i = 0; i < length; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    document.getElementById("password").textContent = password;
    document.getElementById("copyBtn").disabled = false;
}

function copyPassword() {
    let passwordText = document.getElementById("password").textContent;
    navigator.clipboard.writeText(passwordText).then(() => {
        alert("Password copied to clipboard!");
    });
}
