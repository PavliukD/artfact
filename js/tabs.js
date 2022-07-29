(() => {
    const refs = {
        firstButton: document.querySelector('[data-first-button]'),
        secondButton: document.querySelector('[data-second-button]'),
        thirdButton: document.querySelector('[data-third-button]'),
        fourthButton: document.querySelector('[data-fourth-button]'),
        firstGroup: document.querySelector('[data-first-group]'),
        secondGroup: document.querySelector('[data-second-group]'),
        thirdGroup: document.querySelector('[data-third-group]'),
        fourthGroup: document.querySelector('[data-fourh-group]'),
    }

    refs.firstButton.addEventListener('click', firstButtonClick)
    refs.secondButton.addEventListener('click', secondButtonClick)
    refs.thirdButton.addEventListener('click', thirdButtonClick)
    refs.fourthButton.addEventListener('click', fourthButtonClick)

    function firstButtonClick(){
        if (!refs.firstGroup.classList.contains('hide-list')){
            refs.firstGroup.classList.add('hide-list')
            return
        }
        refs.firstGroup.classList.remove('hide-list')
        refs.secondGroup.classList.add('hide-list')
        refs.thirdGroup.classList.add('hide-list')
        refs.fourthGroup.classList.add('hide-list')
    }

    function secondButtonClick(){
        if (!refs.secondGroup.classList.contains('hide-list')){
            refs.secondGroup.classList.add('hide-list')
            return
        }
        refs.firstGroup.classList.add('hide-list')
        refs.secondGroup.classList.remove('hide-list')
        refs.thirdGroup.classList.add('hide-list')
        refs.fourthGroup.classList.add('hide-list')
    }

    function thirdButtonClick(){
        if (!refs.thirdGroup.classList.contains('hide-list')){
            refs.thirdGroup.classList.add('hide-list')
            return
        }
        refs.firstGroup.classList.add('hide-list')
        refs.secondGroup.classList.add('hide-list')
        refs.thirdGroup.classList.remove('hide-list')
        refs.fourthGroup.classList.add('hide-list')
    }

    function fourthButtonClick(){
        if (!refs.fourthGroup.classList.contains('hide-list')){
            refs.fourthGroup.classList.add('hide-list')
            return
        }
        refs.firstGroup.classList.add('hide-list')
        refs.secondGroup.classList.add('hide-list')
        refs.thirdGroup.classList.add('hide-list')
        refs.fourthGroup.classList.remove('hide-list')
    }
})();