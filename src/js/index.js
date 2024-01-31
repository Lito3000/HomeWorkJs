function updateQueryString(url, key, value) {
  const parsedUrl = new URL(url);
  parsedUrl.searchParams.set(key, value);
  parsedUrl.searchParams.get('s', '56');

  return parsedUrl.toString();
}

// Приклад використання
console.log(updateQueryString('https://example.com/path?query=123', 'query', '456'));

const params = new URL(document.location).searchParams;
const name = params.get('name'); // is the string "Jonathan Smith".
const age = parseInt(params.get('age')); // is the number 18
console.log(age);

const paramsString = 'https://example.com/search?q=query&sort=ascending&page=2';
const searchParams = new URLSearchParams(paramsString);

// Iterating the search parameters
for (const p of searchParams) {
  console.log(p);
}

console.log(searchParams.has('topic')); // true
console.log(searchParams.has('topic', 'fish')); // false
console.log(searchParams.get('topic') === 'api'); // true
console.log(searchParams.getAll('topic')); // ["api"]
console.log(searchParams.get('foo') === null); // true
console.log(searchParams.append('topic', 'webdev'));
console.log(searchParams.toString()); // "q=URLUtils.searchParams&topic=api&topic=webdev"
console.log(searchParams.set('topic', 'More webdev'));
console.log(searchParams.toString()); // "q=URLUtils.searchParams&topic=More+webdev"
console.log(searchParams.delete('topic'));
console.log(searchParams.toString()); // "q=URLUtils.searchParams"
