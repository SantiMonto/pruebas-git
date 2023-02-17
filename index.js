// aqui Sebas hara la función suma para sumar en index.html



//aqui Santi hace la función multiplica para multiplicar en HTML
function multiplicar() {
    // Obtener los valores de los inputs
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
  
    // Multiplicar los dos números
    const resultado = num1 * num2;
  
    // Asignar el resultado al input correspondiente
    document.getElementById("result").value = resultado;
  }
