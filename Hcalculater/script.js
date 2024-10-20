function calculateAge() {
    const birthdate = document.getElementById('birthdate').value;
    if (!birthdate) {
        alert('Please select a birthdate');
        return;
    }

    const birthDate = new Date(birthdate);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
}

function changeBgColor() {
    const color = document.getElementById('bg-color').value;
    document.body.style.backgroundColor = color;
}
