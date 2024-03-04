"use strict";
(function () {
    const arr = [1, 2, [1.1, 1.2, 1.3], 3]
    const generateList = function (item) {
        const ul = document.createElement('ul')
        for (let i = 0; i < item.length; i++) {
            const li = document.createElement('li')
            if (!Array.isArray(item[i])) {
                li.innerHTML = item[i]
            } else {
                li.append(generateList(item[i]))
            }
            ul.append(li)
        }
        return ul
    }
    document.body.append(generateList(arr))
})()