

var input_1 = document.getElementById("input-1");

var input_2 = document.getElementById("input-2");

var btnAdd = document.getElementById("btnAdd");

var inputList = [];

if (localStorage.getItem("bookMarks") != null) {
    inputList = JSON.parse(localStorage.getItem("bookMarks"));

    displayData();
}



function addValue() {

    if (validationName() && validationURL()) {

        var bookMark = {
            siteName: input_1.value,
            siteUrl: input_2.value
        };

        inputList.push(bookMark);

        localStorage.setItem("bookMarks", JSON.stringify(inputList))

        clearInput();

        displayData();

    }



}



function clearInput() {
    input_1.value = "";
    input_2.value = "";
    input_1.classList.remove("is-valid")
    input_1.classList.remove("is-invalid")
    input_2.classList.remove("is-valid")
    input_2.classList.remove("is-invalid")
    btnAdd.setAttribute("data-bs-toggle", "modal")
    btnAdd.setAttribute("data-bs-target", "#exampleModal")

}


function displayData() {
    var cartona = "";
    for (var i = 0; i < inputList.length; i++) {
        var str = inputList[i].siteName;
        var str2 = str.charAt(0).toUpperCase() + str.slice(1);
        cartona +=
            `
          <tr>

          <td>${i + 1}</td>
          <td>${str2}</td>

          <td>
              <a target="_blank" href="https://www.${inputList[i].siteUrl}">
              <button class="btn for-visit fw-bold">
                <i class="fa-solid fa-eye pe-1"></i>
                Visit
              </button>
              </a>

            </td>

          <td>

          <button onclick="deleteItem(${i})" class="btn for-delete fw-bold">
           <i class="fa-solid fa-trash-can"></i>
           Delete
          </button>

          </td>

        </tr>
          
          `
    }

    document.getElementById("tbody").innerHTML = cartona;
}


function deleteItem(index) {
    inputList.splice(index, 1);
    localStorage.setItem("bookMarks", JSON.stringify(inputList))
    displayData();
}


function validationName() {
    var textName = input_1.value;
    var regexname = /^[A-Z]{3,}$/i

    if (regexname.test(textName)) {
        input_1.classList.add("is-valid");
        input_1.classList.remove("is-invalid");

        if (chick()) {
            btnAdd.removeAttribute("data-bs-toggle");
            btnAdd.removeAttribute("data-bs-target");
        }
        
        return true;
    }
    else {
        input_1.classList.add("is-invalid");
        input_1.classList.remove("is-valid");
        btnAdd.setAttribute("data-bs-toggle", "modal");
        btnAdd.setAttribute("data-bs-target", "#exampleModal");
        return false;
    }
}


function validationURL() {
    var textUrl = input_2.value;
    var regexUrl = /^[A-Z]{3,}(.com)$/i

    if (regexUrl.test(textUrl)) {
        input_2.classList.add("is-valid")
        input_2.classList.remove("is-invalid");

        if (chick()) {
            btnAdd.removeAttribute("data-bs-toggle");
            btnAdd.removeAttribute("data-bs-target");
        }

        return true;

    }
    else {
        input_2.classList.add("is-invalid");
        input_2.classList.remove("is-valid")
        btnAdd.setAttribute("data-bs-toggle", "modal")
        btnAdd.setAttribute("data-bs-target", "#exampleModal")
        return false;
    }

}


function chick () {
    var textName = input_1.value;
    var regexname = /^[A-Z]{3,}$/i

    var textUrl = input_2.value;
    var regexUrl = /^[A-Z]{3,}(.com)$/i

    if (regexname.test(textName) && regexUrl.test(textUrl))
    {
        btnAdd.removeAttribute("data-bs-toggle");
        btnAdd.removeAttribute("data-bs-target");
        return true;
    }
    return false;
}





