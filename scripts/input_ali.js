// Дожидаемся полной загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('userInput');
    const button = document.getElementById('submitBtn');
    const output = document.getElementById('output');

    // Добавляем обработчик клика на кнопку
    button.addEventListener('click', function() {
        // Получаем текст из поля ввода
        const text = input.value;
        
        // Выводим текст в абзац. 
        // textContent безопаснее, чем innerHTML, так как не исполняет HTML-теги.
        output.textContent = 'Привет ' + text;
        
        // Очищаем поле ввода
        input.value = '';
    });
});