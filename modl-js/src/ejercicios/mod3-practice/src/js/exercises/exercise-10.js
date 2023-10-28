/* 
EJERCICIO 10:
Muestra un array con el título de las películas ordenadas alfabéticamente
*/

function sortStrings(a, b) {
  const string1 = a.toLowerCase();
  const string2 = b.toLowerCase();

  if (string1 < string2) return -1;
  if (string1 > string2) return 1;
  return 0;
}

const arrayOfTitles = movies.map((movie) => movie.title);
// const sortedArrayOfTitles = arrayOfTitles.sort(sortStrings);
const sortedArrayOfTitles = arrayOfTitles.sort((a, b) =>
  a.toLowerCase() < b.toLowerCase() ? -1 : (
    a.toLowerCase() == b.toLowerCase() ? 0 : 1
  ));

showContent(10, sortedArrayOfTitles);
