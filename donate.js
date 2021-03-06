var DonorInfo = (function() {

    var donorArray = [{name: "Tom", email: "email@scoops.com", amount: 88}];


    return {
        addDonor: function(newDonor) {
            donorArray.push(newDonor);

        },
        showDonor: function(newDonor) {
            var inputTable = document.getElementById("inputTable");
            var tableString = "";

            tableString += `<tbody><th>Name</th><th>Email</th><th>Amount</th><th>Type</th>`;
            for (var i = 0; i < donorArray.length; i++) {
                currentDonor = donorArray[i];
                tableString += `<tr id="theTable">`;
                tableString += `<td>${currentDonor.name}</td>`;
                tableString += `<td>${currentDonor.email}</td>`;
                tableString += `<td>${currentDonor.amount}</td>`;
                tableString += `<td>${currentDonor.type}</td></tr>`;
            }
            tableString += `</tbody>`;
            inputTable.innerHTML = tableString;
        },
        getDonor: function() {
            return donorArray;
        }
    }
})();

DonorInfo.showDonor();



