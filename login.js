// Funksioni për validimin e formatit të email-it
function validateEmail(email) {
    // Përdor një shprehje regullore (regex) për verifikimin e formatit të email-it
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email); // Kthe true nëse formati është i saktë, në të kundërt kthe false
}

// Funksioni për validimin e të dhënave të formës
function validateForm() {
    // Merr referencat e elementeve nga DOM për email dhe fjalëkalim
    const email = document.getElementById('loginEmail');
    const password = document.getElementById('loginPassword');

    // Kontrollon nëse fusha e email-it është bosh
    if (!email.value) {
        return alert('Please fill in the Email!');
    }

    // Kontrollon validitetin e email-it duke përdorur funksionin validateEmail
    if (!validateEmail(email.value)) {
        alert("The email is not correct.");
        return;
    }

    // Kontrollon nëse fusha e fjalëkalimit është bosh
    if (!password.value) {
        return alert('Please fill in the Password!');
    }

    // Kontrollon gjatësinë e fjalëkalimit
    if (password.value.length < 7) {
        alert("Password must have at least 7 characters!");
        return;
    }

    // Njofton përdoruesin se hyrja ishte e suksesshme
    alert("Login was successful!");
}

