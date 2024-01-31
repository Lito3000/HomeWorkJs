function parseUrl(url) {
  const parsedUrl = new URL(url);

  return {
    href: parsedUrl.href,
    protocol: parsedUrl.protocol,
    host: parsedUrl.host,
    hostname: parsedUrl.hostname,
    pathname: parsedUrl.pathname,
    search: parsedUrl.search,
    hash: parsedUrl.hash,
    origin: parsedUrl.origin,
  };
}

// Приклад використання
console.log(parseUrl('https://example.com:8080/path/name?query=123#hash'));

alert(location);
