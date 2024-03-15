'use strict';

(function () {
    const validation = (form) => {
        const createErr = (inp, text) => {
            const parent = inp.parentNode
            const tegP = document.createElement('p')
            tegP.innerHTML = text
            tegP.classList.add('err-label')
            parent.append(tegP)
        }
        let result = true
        form.querySelectorAll('input').forEach(input => {
            if (input.value === '') {
                createErr(input, 'Будь ласка, заповніть усі поля')
                result = false
            }
        })
        return result
    }
    document.querySelector('[data-form]').addEventListener('submit', function (e) {
        e.preventDefault()
        const data = {}
        if (validation(this) === true) {
            const parent = this.parentNode
            const tegP = document.createElement('p')
            tegP.innerHTML = "Реєстрація успішна"
            parent.append(tegP)
            const inputs = e.target.querySelectorAll('input');
            inputs.forEach(input => {
                data[input.name] = input.value
            })
        }
        console.log(data)
    })
})()

