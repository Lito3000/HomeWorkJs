(function (){
const bodyEl = document.body
const bodyChilds = bodyEl.childNodes
const ul = bodyChilds[1]
const arr = Array.from(ul.childNodes)
let sum = 0
const result = arr.filter(
    function (item) {
        if (item.nodeName === 'LI') {
            item.style.color = 'blueviolet'
            sum += 1
            console.log(item.innerHTML)
            return item
        }
        return null
    }
)

const pop = []
for (let elem of result) {
    pop.push(elem.innerHTML)
}

console.log(pop)
console.log(sum)
})()

