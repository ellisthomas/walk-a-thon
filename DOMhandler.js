
//////////////// EVENT LISTENERS ////////////////

var name = document.getElementById("name");
var email = document.getElementById("email");
var amount = document.getElementById("amount");
var oneTime = document.getElementById("oneTime");
var perLap = document.getElementById("perLap");
var donate = document.getElementById("donate");
var cancel = document.getElementById("cancel");

donate.addEventListener("click", printDonor);
cancel.addEventListener("click", clear);


function printDonor() {
var newDonor = {};
	newDonor.name = document.getElementById("name").value;
	newDonor.email = document.getElementById("email").value;
	newDonor.amount = document.getElementById("amount").value;
	newDonor.type = document.getElementsByName("amountType")
	for (var i = 0; i < 2; i++) {
		if (newDonor.type[i].checked) {
			newDonor.type = newDonor.type[i].value
		}
	}
	if (newDonor.name === "" || newDonor.email === "" || newDonor.amount === "") {
		alert("Easy there killer, fill in the blanks!")
	} else {
		DonorInfo.addDonor(newDonor);
		DonorInfo.showDonor(newDonor);
		clear();
	};
};

function clear() {
	name.value = "";
	email.value = "";
	amount.value = "";
};

