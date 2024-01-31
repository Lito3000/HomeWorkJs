const parse = function parseUrl(url) {
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
    password: parsedUrl.password,
    port: parsedUrl.port,
    searchParams: parsedUrl.searchParams,
    username: parsedUrl.username,
  };
};

// Приклад використання
console.log(parse(window.location));
