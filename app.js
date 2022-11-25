const form = document.querySelector(".email-block");
const input = document.querySelector("input");
const btn = document.querySelector(".btn");
const error = document.querySelector(".error");
const label = document.querySelector("label");

form.addEventListener("submit", emailVal);
btn.addEventListener("click", emailVal);

function emailVal(e) {
	e.preventDefault();

	const inputValue = input.value.trim;

	if (!isEmail(inputValue)) {
		error.style.display = "block";
		label.style.display = "block";
	} else {
		error.style.display = "none";
		label.style.display = "none";
	}
}

function isEmail(input) {
	return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input);
}
