let nombre = "Nicolas";
let apellido = "Parra";

let estudiante = `${nombre} ${apellido}`
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();

console.log(estudiante);
console.log(estudiante.toUpperCase());
console.log(estudianteMayus);
console.log(estudianteMinus);
console.log(estudiante.length);
console.log(estudiante.charAt(0));
console.log(estudiante.charAt(12));
console.log(estudiante.trim().length);
console.log(estudiante.includes("Nicolas"));
console.log(estudiante.includes(nombre));

