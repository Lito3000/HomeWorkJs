"use strict";
(function () {
    const num = document.querySelector('[text]')
    const btn = document.querySelector('.btn')

    btn.onclick = function () {
        const tegP = document.createElement('p')
        tegP.innerHTML = num.value
        document.body.append(tegP)
        num.value = ''
    }
})()
