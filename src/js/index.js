"use strict";
(function () {
    const arr = [1, 2, [1.1, 1.2, 1.3], 3]
    const generateList = function (item) {
        const ul = document.createElement('ul')
        for (const [key,value]of Object.entries(item)){
            const li = document.createElement('li')
            if (Array.isArray(value)) {
                li.append(generateList(value))
            } else {
                li.innerHTML = value
            }
            ul.append(li)
        }
        return ul
    }
    document.body.append(generateList(arr))
})()