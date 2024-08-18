function openRegistration() {
    if (!localStorage.getItem('registered')) {
        document.getElementById('registration-modal').style.display = 'flex';
    }
}

function closeRegistration() {
    document.getElementById('registration-modal').style.display = 'none';
}

function handleRegistration(event) {
    event.preventDefault(); // Перешкоджає відправленню форми
    localStorage.setItem('registered', 'true'); // Зберігає інформацію про реєстрацію
    closeRegistration(); // Закриває модальне вікно
}

window.onload = function() {
    openRegistration(); // Показ модального вікна при завантаженні сторінки
}

document.querySelector('#registration-modal form').addEventListener('submit', handleRegistration);

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function goToNextSection() {
    const sections = document.querySelectorAll('.section');
    let currentSectionIndex = -1;
    sections.forEach((section, index) => {
        if (section.style.display === 'block') {
            currentSectionIndex = index;
        }
    });
    const nextSectionIndex = (currentSectionIndex + 1) % sections.length;
    sections[currentSectionIndex].style.display = 'none';
    sections[nextSectionIndex].style.display = 'block';
}
document.addEventListener('DOMContentLoaded', (event) => {
    // Показуємо модальне вікно при завантаженні сторінки
    const modal = document.getElementById('registration-modal');
    modal.style.display = 'flex';  // Використовуємо 'flex' для центрування модального вікна
    
    // Закриваємо модальне вікно при натисканні на хрестик
    const closeBtn = document.querySelector('.modal-content .close');
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Закриваємо модальне вікно при натисканні поза межами вікна
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
// Функція для зберігання даних про зареєстрованих користувачів
function getRegisteredUsers() {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
}

// Функція для збереження даних про зареєстрованих користувачів
function setRegisteredUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

// Функція для перевірки наявності користувача
function isUserRegistered(username, email) {
    const users = getRegisteredUsers();
    return users.some(user => user.username === username || user.email === email);
}

// Функція для реєстрації нового користувача
function handleRegistration(event) {
    event.preventDefault(); // Перешкоджає відправленню форми

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;

    if (password !== confirmPassword) {
        alert('Паролі не співпадають!');
        return;
    }

    if (isUserRegistered(username, email)) {
        alert('Користувач з таким іменем або електронною поштою вже існує.');
        return;
    }

    const users = getRegisteredUsers();
    users.push({ username, email, password });
    setRegisteredUsers(users);

    alert('Реєстрація успішна!');
    closeRegistration(); // Закриває модальне вікно
}

// Функція для входу
function handleLogin(event) {
    event.preventDefault(); // Перешкоджає відправленню форми

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const users = getRegisteredUsers();
    const user = users.find(user => user.username === username && user.email === email && user.password === password);

    if (user) {
        alert('Вхід успішний!');
        closeRegistration(); // Закриває модальне вікно
    } else {
        alert('Неправильний нікнейм, електронна пошта або пароль.');
    }
}

// Функція для відкриття модального вікна реєстрації
function openRegistration() {
    if (!localStorage.getItem('registered')) {
        document.getElementById('registration-modal').style.display = 'flex';
    }
}

// Функція для закриття модального вікна реєстрації
function closeRegistration() {
    document.getElementById('registration-modal').style.display = 'none';
}

window.onload = function() {
    openRegistration(); // Показ модального вікна при завантаженні сторінки
}

document.querySelector('#registration-form').addEventListener('submit', handleRegistration);
document.querySelector('#login-button').addEventListener('click', handleLogin);

document.addEventListener('DOMContentLoaded', (event) => {
    // Показуємо модальне вікно при завантаженні сторінки
    const modal = document.getElementById('registration-modal');
    modal.style.display = 'flex';  // Використовуємо 'flex' для центрування модального вікна
    
    // Закриваємо модальне вікно при натисканні на хрестик
    const closeBtn = document.querySelector('.modal-content .close');
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Закриваємо модальне вікно при натисканні поза межами вікна
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
window.onclick = function(event) {
    const modal = document.getElementById('registration-modal');
    if (event.target === modal) {
        closeRegistration();
    }
};
document.addEventListener('DOMContentLoaded', () => {
    // Show registration modal on page load
    const modal = document.getElementById('registration-modal');
    modal.style.display = 'flex';  // Use 'flex' for centering the modal
    
    // Close modal on clicking the close button or outside the modal
    const closeBtn = document.querySelector('.modal-content .close');
    closeBtn.addEventListener('click', closeRegistration);
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeRegistration();
        }
    });

    // Form submission handler
    document.querySelector('#registration-form').addEventListener('submit', handleRegistration);
    document.querySelector('#login-button').addEventListener('click', handleLogin);
});

function openRegistration() {
    if (!localStorage.getItem('registered')) {
        document.getElementById('registration-modal').style.display = 'flex';
    }
}

function closeRegistration() {
    document.getElementById('registration-modal').style.display = 'none';
}

function handleRegistration(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;

    if (password !== confirmPassword) {
        alert('Паролі не співпадають!');
        return;
    }

    if (isUserRegistered(username, email)) {
        alert('Користувач з таким іменем або електронною поштою вже існує.');
        return;
    }

    const users = getRegisteredUsers();
    users.push({ username, email, password });
    setRegisteredUsers(users);

    alert('Реєстрація успішна!');
    closeRegistration();
}

function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const users = getRegisteredUsers();
    const user = users.find(user => user.username === username && user.email === email && user.password === password);

    if (user) {
        alert('Вхід успішний!');
        closeRegistration();
    } else {
        alert('Неправильний нікнейм, електронна пошта або пароль.');
    }
}

function getRegisteredUsers() {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
}

function setRegisteredUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

function isUserRegistered(username, email) {
    const users = getRegisteredUsers();
    return users.some(user => user.username === username || user.email === email);
}