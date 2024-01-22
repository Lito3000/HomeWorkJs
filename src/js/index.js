// eslint-disable-next-line func-names
let Foo;
// eslint-disable-next-line func-names
Foo.prototype.bar = function () {};

// eslint-disable-next-line func-names
(function () {
  // ...
}());

// eslint-disable-next-line func-names
export default function () {}
