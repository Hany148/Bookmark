

var input_1 = document.getElementById("input-1");

var input_2 = document.getElementById("input-2");

var inputList = [];

if (localStorage.getItem("bookMarks") != null)
{
    inputList = JSON.parse( localStorage.getItem("bookMarks") ) ;

    displayData();
}



function addValue() {

    var bookMark = {
        siteName: input_1.value,
        siteUrl: input_2.value
    };

    inputList.push(bookMark);

    localStorage.setItem("bookMarks" , JSON.stringify(inputList))

    clearInput();

    displayData();

}

function clearInput() {
    input_1.value = "";
    input_2.value = "";
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
    localStorage.setItem("bookMarks" , JSON.stringify(inputList))
    displayData();
}


