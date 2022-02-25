const emailField = document.getElementById('email')
const validEmailPattern = new RegExp('([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?')

emailField.addEventListener('input', (e) => validate(e.target, validEmailPattern))

function validate(field, pattern) {
    console.log(field.value)
    
    if (pattern.test(field.value)) {
        field.parentNode.className = 'valid'
    } else {
        field.parentNode.className = ''
    }
}
