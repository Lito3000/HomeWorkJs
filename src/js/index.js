const upd = function updateQueryString(url, key, value) {
  const parsedUrl = new URL(url);
  parsedUrl.searchParams.set(key, value);

  return parsedUrl.toString();
};

const g = upd('https://example.com/path?query=123', 'query', '456');
console.log(g);
