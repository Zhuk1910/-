// Получаем кнопку и добавляем обработчик события
const checkBtn = document.getElementById('checkBtn');
checkBtn.addEventListener('click', checkTriangle);

function checkTriangle() {
    const resultElement = document.getElementById('result');
    resultElement.style.display = 'block';
    resultElement.className = 'result';
    
    // Получаем значения из полей
    const a = document.getElementById('side1').value;
    const b = document.getElementById('side2').value;
    const c = document.getElementById('side3').value;
    
    // Проверка на пустые поля 
    if (a === '' || b === '' || c === '') {
        resultElement.classList.add('error');
        resultElement.textContent = 'Пожалуйста, заполните все поля';
        return;
    }
    
    // Проверка на числа
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    const numC = parseFloat(c);
    
    // Проверка на корректные числа 
    if (isNaN(numA) || isNaN(numB) || isNaN(numC)) {
        resultElement.classList.add('error');
        resultElement.textContent = 'Все значения должны быть числами';
        return;
    }
    
    // Проверка на положительность 
    if (numA <= 0 || numB <= 0 || numC <= 0) {
        resultElement.classList.add('error');
        resultElement.textContent = 'Стороны должны быть положительными числами';
        return;     
    }
    
    // Проверка существования треугольника 
    if (numA + numB <= numC || numA + numC <= numB || numB + numC <= numA) {
        resultElement.classList.add('error');
        resultElement.textContent = 'Такой треугольник не существует';
        return;
    }
    
    // Определение типа треугольника 
    if (numA === numB && numB === numC) {
        resultElement.classList.add('success');
        resultElement.textContent = 'Равносторонний треугольник';
    } else if (numA === numB || numA === numC || numB === numC) {
        resultElement.classList.add('success');
        resultElement.textContent = 'Равнобедренный треугольник';
    } else {
        resultElement.classList.add('success');
        resultElement.textContent = 'Разносторонний треугольник';
    }
}