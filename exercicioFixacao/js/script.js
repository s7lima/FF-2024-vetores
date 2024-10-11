document.addEventListener('DOMContentLoaded', () => {
    const employeeForm = document.getElementById('employeeForm');
    const employeeTable = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];
    const restartBtn = document.getElementById('restartBtn');

    // Carrega os dados do sessionStorage
    function loadEmployees() {
        const employees = JSON.parse(sessionStorage.getItem('employees')) || [];
        employees.forEach(employee => addRowToTable(employee));
        toggleRestartButton(employees.length);
    }

    // Adiciona uma linha na tabela
    function addRowToTable(employee) {
        const row = employeeTable.insertRow();
        row.insertCell(0).innerText = employee.name;
        row.insertCell(1).innerText = employee.age;
        row.insertCell(2).innerText = employee.gender;
        row.insertCell(3).innerText = employee.salary.toFixed(2);
    }

    // Mostra ou esconde o botão de reiniciar
    function toggleRestartButton(count) {
        restartBtn.style.display = count >= 2 ? 'block' : 'none';
    }

    // Manipula o envio do formulário
    employeeForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const age = parseInt(document.getElementById('age').value);
        const gender = document.getElementById('gender').value;
        const salary = parseFloat(document.getElementById('salary').value);

        const employees = JSON.parse(sessionStorage.getItem('employees')) || [];

        // Verifica se os campos estão preenchidos e se a idade e salário são válidos
        if (name === '' || gender === '' || isNaN(salary) || isNaN(age)) {
            alert('Todos os campos devem ser preenchidos.');
            return;
        }

        if (age < 14 || age > 120) {
            alert('A idade deve ser maior que 14 e menor que 120.');
            return;
        }

        if (salary <= 1500 || salary >= 15000) {
            alert('O salário deve ser maior que 1500 e menor que 15000.');
            return;
        }

        // Verifica se já existem 5 registros
        if (employees.length < 5) {
            const newEmployee = { name, age, gender, salary };
            employees.push(newEmployee);
            sessionStorage.setItem('employees', JSON.stringify(employees));
            addRowToTable(newEmployee);
            employeeForm.reset();
            toggleRestartButton(employees.length);
        } else {
            alert('Limite de 5 funcionários alcançado.');
            toggleRestartButton(employees.length);
        }
    });

    // Reinicia o cadastro
    restartBtn.addEventListener('click', () => {
        sessionStorage.removeItem('employees'); // Limpa os dados
        employeeTable.innerHTML = ''; // Limpa a tabela
        employeeForm.reset(); // Reseta o formulário
        toggleRestartButton(0); // Esconde o botão de reiniciar
    });

    // Carrega os funcionários ao iniciar
    loadEmployees();
});