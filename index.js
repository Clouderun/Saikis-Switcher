const body = document.getElementsByTagName('body')[0];

//body.style.backgroundColor= '';


//name representa a cor que queremos mudar para. Pois queremos mudar mais de uma vez para mais de uma cor
function switcher(name) {
    body.style.backgroundColor = name;
}

//switcher('hotpink');

function randomColor() {
    //fazemos a * 255 pois o random inicialmente e entre 0 - 1
    // entao ao multiplicar por 255, fica entre 0 - 255
    // e para nao gerar decimais tipo 255.20023920 usamos o round para arrendondar
    // estamos usando 3 cores baseadas no rgb
    const red = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);

    const color = `rgb(${red}, ${blue}, ${green})`;
    body.style.backgroundColor = color;
}