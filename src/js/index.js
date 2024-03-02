const bodyEl = document.body
const bodyChilds = bodyEl.childNodes
const ul = bodyChilds[1]

const arr = Array.from(ul.childNodes)
let sum = null
let result = arr.filter(
    function (item) {
        if (item.nodeName === 'LI') {
            item.style.color = 'blueviolet'
            sum += 1
            console.log(item.innerHTML)
            return item.innerHTML
        }
        return null
    }
)

let pop = []
for (let elem of result) {
    pop.push(elem.innerHTML)
}

console.log(pop)
console.log(sum)

