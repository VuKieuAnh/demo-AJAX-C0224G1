function showAllCustomer() {
//     goi AJAX -> dung AJAX gui request
    $.ajax({
        // method
        type: "GET",
        // API
        url: 'http://localhost:8080/api/customers',
    //     xu ly khi thanh cong
    //     200 -> response _> dulieu
        success: function (dulieu) {
            let content = "";
            for (let i = 0; i < dulieu.length; i++) {
                content+=` <tr>
        <td>${dulieu[i].firstName}</td>
        <td>${dulieu[i].lastName}</td>
        <td>${dulieu[i].province.name}</td>
        <td></td>
    </tr>`
            }
            document.getElementById("customers").innerHTML = content;
        }
    })
}
showAllCustomer();
function createCustomer() {
    let fn = document.getElementById("firstName").value;
    let ln = document.getElementById("lastName").value;
    let province = +document.getElementById("province").value;

    let customer = {
        "firstName": fn,
        "lastName": ln,
        "province": {
            "id": province
        }
    };

    $.ajax({
        // muon day JSON len
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        url: 'http://localhost:8080/api/customers',
        data: JSON.stringify(customer),
        success: function (response) {
            // hien thi danh sach
            showAllCustomer()
        }
    })
}
