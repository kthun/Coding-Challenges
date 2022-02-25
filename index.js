const emailField = document.querySelector('#email')
const validEmailPattern = new RegExp('([A-Za-z\\d\\.-]+)@([A-Za-z\\d-]+)\\.([A-Za-z]{2,8})(\\.[A-Za-z]{2,8})?')
const validEmailPattern2 = /^([A-Za-z\d\.-]+)@([A-Za-z\d-]+)\.([A-Za-z]{2,8})(\.[A-Za-z]{2,8})?$/

emailField.addEventListener('input', (e) => validate(e.target, validEmailPattern))

function validate(field, pattern) {
    if (pattern.test(field.value)) {
        field.parentElement.classList.add('valid')
    } else {
        field.parentElement.classList.remove('valid')
    }
}
