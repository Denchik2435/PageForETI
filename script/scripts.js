document.getElementById('toggle-panel').onclick = function() {
    const panel = document.getElementById('style-panel');
    panel.style.display = panel.style.display === 'none' ? 'block' : 'none'; // перемикаємо видимість панелі
};

document.getElementById('color-red').onclick = function() {
    document.body.style.color = 'pink';
};

document.getElementById('color-blue').onclick = function() {
    document.body.style.color = 'blue';
};

document.getElementById('color-green').onclick = function() {
    document.body.style.color = 'green';
};

document.getElementById('font-size-select').onchange = function() {
    document.body.style.fontSize = this.value + 'px';
};

document.getElementById('set-width').onclick = function() {
    const width = document.getElementById('width-range').value;
    document.getElementById('container').style.width = width + 'px';
};

document.getElementById('bg-color-red').onclick = function() {
    document.body.style.backgroundColor = 'red';
};

document.getElementById('bg-color-blue').onclick = function() {
    document.body.style.backgroundColor = 'blue';
};

document.getElementById('bg-color-green').onclick = function() {
    document.body.style.backgroundColor = 'green';
};