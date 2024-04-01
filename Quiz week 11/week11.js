document.getElementById('month').addEventListener('change', function() {
    let days;
    const choice = this.value;

    if (choice === 'February') {
        days = 28;
    } else if (choice === 'April' || choice === 'June' || choice === 'September' || choice === 'November') {
        days = 30;
    } else {
        days = 31;
    }

    document.getElementById('days').textContent = `The month of ${choice} has ${days} days.`;
});