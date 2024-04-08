document.addEventListener('DOMContentLoaded', () => {
	const burger = document.querySelector('.burger')
	const menu = document.querySelector('.menu')

	if (burger && menu) {
		let isVisible = false

		const showMenu = () => {
			isVisible = true
			burger.classList.add('active')
			menu.classList.add('visible')
		}

		const hideMenu = () => {
			isVisible = false
			burger.classList.remove('active')
			menu.classList.remove('visible')
		}

		burger.addEventListener('click', () => {
			if (isVisible) {
				hideMenu()
			} else {
				showMenu()
			}
		})
	}

	const navigateLinks = document.querySelectorAll('.js-navigate')

	if (navigateLinks.length > 0) {
		navigateLinks.forEach((link) => {
			link.addEventListener('click', function (e) {
				e.preventDefault()
				const str = link.getAttribute('href')
				const blockId = str.slice(1, str.length)

				document.getElementById(blockId).scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				})
			})
		})
	}

	const selects = document.querySelectorAll('.field__select-current')
	if (selects.length > 0) {
		const closeSelect = (event) => {
			const select = event.target
			select.closest('.field__select').classList.remove('active')
		}
		const openSelect = (event) => {
			const select = event.target
			select.closest('.field__select').classList.add('active')
		}
		selects.forEach((select) => {
			select.addEventListener('click', (e) => {
				if (select.closest('.field__select').classList.contains('active')) {
					closeSelect(e)
				} else {
					openSelect(e)
				}
			})
			const options = select
				.closest('.field__select')
				.querySelectorAll('.field__select-option')
			if (options.length > 0) {
				options.forEach((option) => {
					option.addEventListener('click', (e) => {
						const value = e.target.getAttribute('data-value')
						const inputField = e.target
							.closest('.field__select')
							.querySelector('.field__select-value')
						const currentField = e.target
							.closest('.field__select')
							.querySelector('.field__select-current')
						inputField.setAttribute('value', value)
						currentField.innerText = value
						closeSelect(e)
					})
				})
			}
		})
	}

	const rangeInput = document.querySelector('.js-range')
	const percent = document.querySelector('.js-percent')
	if (rangeInput && percent) {
		rangeInput.addEventListener('change', (e) => {
			setPercent(e.target.value)
		})

		rangeInput.addEventListener('input', (e) => {
			setPercent(e.target.value)
		})
		const setPercent = (value) => {
			percent.innerText = `${value}%`
		}
	}
})
