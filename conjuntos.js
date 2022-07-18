// - Un nuevo Set con los nombres de tu familia

const familia = ["Esteban", "Juan", "Marcelo", "Mónica", "Erika", "Camila"]

const miSet = new Set (familia)
console.log(miSet);

// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)

miSet.add ("Esteban")
console.log(miSet); // Da lo mismo

// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)

miSet.add ("Javascript")
console.log(miSet);
