(function () {
    const bodyEl = document.body
    const input = document.getElementById('ulId')
    let atributeArrayValue = []
    let atributeArrayName = []
    for (let atr of input.attributes) {
        atributeArrayValue.push(atr.value)
        atributeArrayName.push(atr.name)
        input.firstElementChild.setAttribute('data-my-name', 'andrey')
        input.removeAttribute('data-dog-tail')
    }
    console.log(atributeArrayValue)
    console.log(atributeArrayName)

    const bodyChilds = bodyEl.childNodes
    const ul = bodyChilds[1]
    const li = ul.childNodes[3]
    li.innerHTML = 'Привет меня зовут Андрей'

})()