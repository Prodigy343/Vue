const blur = {}

function setBlur (el, binding) {
    el.style.filter = !binding.value ? 'blur(3px)' : 'none'
    el.style.cursor = !binding.value ? 'not-allowed' : 'initial'
    el.querySelectorAll('button').forEach(btn => {
        !binding.value ? btn.setAttribute('disabled', true) : btn.removeAttribute('disabled')
    })
}

blur.install = Vue => {
    Vue.directive('blur', {
        bind (el, binding) {
            setBlur(el, binding)
        }
    })
}

export default blur
