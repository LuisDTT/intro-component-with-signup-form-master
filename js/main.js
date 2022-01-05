const btn = document.querySelector(".container-form__form-btn");

btn.addEventListener("click",(e)=>{

	let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

	const email = document.querySelector("#email");

	document.querySelectorAll(".container-form__box-input").forEach(element=>{

		if (element.value == "") {

			element.parentNode.querySelector(".container-form__box-input").classList.add("container-form__box-input--error")
			element.parentNode.children[1].classList.add("container-form__box-icon-error--active");
			element.parentNode.children[2].classList.add("container-form__box-text-error--active");
			e.preventDefault()

		} else {

			element.parentNode.querySelector(".container-form__box-input").classList.remove("container-form__box-input--error")
			element.parentNode.lastElementChild.classList.remove("container-form__box-text-error--active");
			element.parentNode.children[1].classList.remove("container-form__box-icon-error--active");
		}

		if (!emailRegex.test(email.value)) {

			email.classList.add("container-form__box-input--error")
			email.parentNode.children[1].classList.add("container-form__box-icon-error--active");
			email.parentNode.children[2].classList.add("container-form__box-text-error--active");
			e.preventDefault()
		}
	})
})