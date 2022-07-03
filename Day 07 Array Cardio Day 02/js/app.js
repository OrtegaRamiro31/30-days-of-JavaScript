// ## Array Cardio Day 2

const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?

//   FORMA 1
//   const esAdulto  = people.some(function(person){
//     const anioActual = new Date().getFullYear();
//     if(anioActual - person.year >= 19){
//         return true;
//     }
//   });
//   console.log(esAdulto);

// FOMRA 2
const esAdulto = people.some(
  (persona) => new Date().getFullYear() - persona.year >= 19
);
console.log({ esAdulto });



/******************************************************************/
// Array.prototype.every() // is everyone 19 or older?
const todosAdultos = people.every(
  (persona) => new Date().getFullYear() - persona.year >= 19
);
console.log({ esAdulto });



/******************************************************************/
// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const encontrado = comments.find((id) => id.id === 823423);
console.log(encontrado.text);



/******************************************************************/
// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
// Buscamos el índice en dónde se encuentre el ID
const index = comments.findIndex((comentario) => comentario.id === 823423);
console.log(index);

//   Eliminamos el comentario con el índice del ID
// comments.splice(index, 1);
// console.log(comments);



/******************************************************************/
// NOTA: Slice copia la referencia. Por lo tanto, si se modifica
// newComments el valor de comments también va a cambiar y viceversa.
// Aqui obtenemos el valor desde 0 HASTA el indice (es decir, indice no se toma).
// En el segundo slice comenzamos desde el índice + 1 hasta el final. Es decir,
// nunca guardamos el elemento con el índice 1 (el segundo objeto del array comments).
const newComments = [
    ...comments.slice(0, index), 
    ...comments.slice(index + 1)
];
console.table(newComments);
console.log(comments.slice(0, index));
console.log(comments.slice(index + 1));
