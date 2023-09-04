function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
let elementos = [];

function setup() {
  createCanvas(800, 600);
  // Crea varios Elementos 1 en posiciones aleatorias
  for (let i = 0; i < 25; i++) {
    let x = random(width);
    let y = random(height);
    let tamano = random(20, 50);
    let direccion = createVector(random(-1, 1), random(-1, 1));
    elementos.push({ x, y, tamano, direccion });
  }
}

function draw() {
  background(220);
  
  for (let i = 0; i < elementos.length; i++) {
    // Actualiza la posición del Elemento 1 (comportamiento B1)
    elementos[i].x += elementos[i].direccion.x;
    elementos[i].y += elementos[i].direccion.y;
    
    // Verifica si el Elemento 1 sale del lienzo y aplica B5 si es necesario
    if (elementos[i].x > width) {
      elementos[i].x = 0;
    } else if (elementos[i].x < 0) {
      elementos[i].x = width;
    }
    if (elementos[i].y > height) {
      elementos[i].y = 0;
    } else if (elementos[i].y < 0) {
      elementos[i].y = height;
    }
    
    // Dibuja el perímetro del Elemento 1 como una línea negra
    noFill();
    stroke(0);
    ellipse(elementos[i].x, elementos[i].y, elementos[i].tamano);
    
    // Dibuja el centro como un punto blanco
    fill(255);
    noStroke();
    ellipse(elementos[i].x, elementos[i].y, 5);
    
    // Comportamiento B3: Detecta si dos Elementos 1 se tocan y dibuja una línea gris
    for (let j = 0; j < elementos.length; j++) {
      if (i !== j) {
        let distancia = dist(elementos[i].x, elementos[i].y, elementos[j].x, elementos[j].y);
        let radioTotal = elementos[i].tamano / 2 + elementos[j].tamano / 2;
        if (distancia < radioTotal) {
          stroke(150);
          line(elementos[i].x, elementos[i].y, elementos[j].x, elementos[j].y);
        }
      }
    }
  }
}
