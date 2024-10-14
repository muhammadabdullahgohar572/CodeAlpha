function calculateAge() {
    const birthdate = document.getElementById('birthdate').value;
    const currentDate = document.getElementById('currentdate').value;
    const resultElement = document.getElementById('result');

    if (birthdate && currentDate) {
        const birthDateObj = new Date(birthdate);
        const currentDateObj = new Date(currentDate);

        let years = currentDateObj.getFullYear() - birthDateObj.getFullYear();
        let months = currentDateObj.getMonth() - birthDateObj.getMonth();
        let days = currentDateObj.getDate() - birthDateObj.getDate();

        if (days < 0) {
            months--;
            days += new Date(currentDateObj.getFullYear(), currentDateObj.getMonth(), 0).getDate();
        }
        if (months < 0) {
            years--;
            months += 12;
        }

        // Use backticks and template literals to insert the calculated values
        resultElement.textContent = `Your current Age is ${years} years ${months} months ${days} days`;
    } else {
        resultElement.textContent = "Please enter both dates.";
    }
}
