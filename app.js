const form = document.querySelector(".form");
const email = document.getElementById("email");
const exMark = document.querySelector(".ex-mark");
const errorMsg = document.querySelector(".error");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	validateEmail();
});

const isValidEmail = (email) => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};

const validateEmail = () => {
	const emailValue = email.value.trim();

	if (emailValue === "") {
		exMark.classList.remove("hide");
		errorMsg.classList.remove("hide");
		email.classList.add("red-border");
	} else if (!isValidEmail(emailValue)) {
		exMark.classList.remove("hide");
		errorMsg.classList.remove("hide");
		email.classList.add("red-border");
	} else {
		email.classList.add("green-border");
	}
};
