const upd = function updateQueryString(url, key, value) {
  const parsedUrl = new URL(url);
  parsedUrl.searchParams.get(key, value);
  parsedUrl.searchParams.set('s', '67');

  return parsedUrl.toString();
};

// Приклад використання
const g = upd('https://example.com/path?query=123', 'query', '456');
console.log(g);

const paramsString = g;
const searchParams = new URLSearchParams(paramsString);

// Iterating the search parameters
for (const p of searchParams) {
  console.log(p);
}

// console.log(searchParams.has('topic')); // true
// console.log(searchParams.has('topic', 'fish')); // false
// console.log(searchParams.get('topic') === 'api'); // true
// console.log(searchParams.getAll('topic')); // ["api"]
// console.log(searchParams.get('foo') === null); // true
// console.log(searchParams.append('topic', 'webdev'));
// console.log(searchParams.toString()); // "q=URLUtils.searchParams&topic=api&topic=webdev"
// console.log(searchParams.set('topic', 'More webdev'));
// console.log(searchParams.toString()); // "q=URLUtils.searchParams&topic=More+webdev"
// console.log(searchParams.delete('topic'));
// console.log(searchParams.toString()); // "q=URLUtils.searchParams"
