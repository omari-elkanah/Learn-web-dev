function displayGreeting() {
    const firstName = document.getElementById('name').value;
    const lastName = document.getElementById('last_name').value;
    const greeting = `Welcome ${firstName} ${lastName}`;
    alert(greeting);
}
