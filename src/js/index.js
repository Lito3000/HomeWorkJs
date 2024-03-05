"use strict";
(function () {
    const table = document.createElement('div')
    table.setAttribute('id', 'element')
    document.body.append(table)

    const elem = document.querySelector('#element')
    const createTable = function (parent, cols, rows){
        const table = document.createElement('table')
        let count = null
        for (let i = 0; i < rows; i++) {
            const tr = document.createElement('tr')
            for (let j = 0; j < cols; j++) {
                const td = document.createElement('td')
                td.style.border = '1px solid black'
                td.style.padding = '10px'
                count = count + 1
                td.innerHTML = count
                tr.append(td)
            }
            table.append(tr)
        }
        parent.append(table)
    }
    createTable(elem, 10, 10)
})()