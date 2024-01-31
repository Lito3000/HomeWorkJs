function updateQueryString(url, key, value) {
  const parsedUrl = new URL(url);
  parsedUrl.searchParams.set(key, value);

  return parsedUrl.toString();
}

// Приклад використання
console.log(updateQueryString('https://example.com/path?query=123', 'query', '456'));
