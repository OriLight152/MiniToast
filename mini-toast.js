let __minitoast_isInit = false

let __minitoast_container;

function showToast(text, type = 'info', duration = 5000) {
    if (!__minitoast_isInit) {
        __minitoast_isInit = true
        __minitoast_container = document.createElement('div')
        __minitoast_container.className = '__minitoast_container'
        document.body.appendChild(__minitoast_container)
    }
    let newToast = __createToast(text, type, duration)
    __minitoast_container.appendChild(newToast)
    setTimeout(() => { newToast.classList.add('__minitoast_item_show') }, 1)

}

function __createToast(text, type, duration) {
    let newToast = document.createElement('div')
    newToast.classList.add('__minitoast_item', '__minitoast_item_' + type)
    let icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="__minitoast_item_icon">
  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
</svg>
`
    newToast.innerHTML = icon +'<div class="__minitoast_item_text">'+ text+'</div>'
    setTimeout(() => {
        newToast.classList.remove('__minitoast_item_show')
        setTimeout(() => {
            newToast.remove()
        }, 500)
    }, duration)
    return newToast
}
