"use strict";
(function () {
    const num = document.querySelector('[text]')
    const btn = document.querySelector('[btn]')

    btn.onclick = function () {
        if (Number(num.value) % 2 === 0) {
            alert('Парне число')
        } else {
            alert('Не парне число')
        }
    }
})()
