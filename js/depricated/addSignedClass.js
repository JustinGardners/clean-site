
const AddSignedClass = () => {
    const productContentTitles = document.querySelectorAll('.product-list__content--title')
    const signedEdition = '(signed edition)'
    const deluxeSignedEdition = '(deluxe signed edition)'
    const containerSelector = '.product-list__content'
    const classToAdd = containerSelector.substring(1) + '--signed'
    
    for (const title of productContentTitles) {
        const hasChild = title.children;
        if(hasChild && hasChild[0].nodeName === 'A') {
            const titleLink = hasChild[0]
            const titleText = titleLink.textContent.toLowerCase()
            if(titleText.includes(signedEdition) || titleText.includes(deluxeSignedEdition)) {
                const containerEl = title.closest(containerSelector)
                if(containerEl) {
                    containerEl.classList.add(classToAdd)
                }            
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    AddSignedClass()
})


