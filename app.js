const form = document.querySelector(".email-block");
const email = document.getElementById("email");
const btnSubmit = document.getElementByI("btn");
const errorMsg = document.querySelector(".error");

form.addEventListener("submit", emailValidation);
btnSubmit.addEventListener("click", emailValidation);

function emailValidation(e) {
	const inputValue = email.textContent;

	if (!isEmail(inputValue)) {
		errorMsg.classList.remove("hide");
	}
}
function isEmail(email) {
	return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
}
// const validateEmail = (email) => {
//   return String(email)
//     .toLowerCase()
//     .match(
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     );
// };
