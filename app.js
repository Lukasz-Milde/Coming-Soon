const form = document.getElementsByTagName("form");
const input = document.getElementById("email");
const btn = document.querySelector(".btn");
const error = document.querySelector(".error");
const exMark = document.querySelector(".exMark");

form.addEventListener("submit", emailVal);
btn.addEventListener("click", emailVal);

function emailVal(e) {
	e.preventDefault();

	const inputValue = input.value.trim;
	const validRegex =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	if (inputValue.match(validRegex)) {
		error.style.display = "none";
		label.style.display = "none";
	} else {
		error.style.display = "block";
		label.style.display = "block";
	}
}
