dataJson = [];
let inputTextData = document.getElementById("inputTextData");
let listItem = document.getElementById("listItem");
let modalBox = document.getElementById("modalBox");
const clearButton = document.getElementById("clearButton");

clearButton.style.display = "none";

const refreshList = () => {
  let listContent = "";
  dataJson.forEach((element) => {
    listContent += `<li class="bg-gray-200 p-2 rounded-xl">${element}</li>`;
  });
  listItem.innerHTML = listContent;
  toggleClearButton(); // Show or hide the clear button based on dataJson
};

const toggleClearButton = () => {
  // If there are items in dataJson, display the clear button, otherwise hide it
  if (dataJson.length > 0) {
    clearButton.style.display = "block";
  } else {
    clearButton.style.display = "none";
  }
};

// Load data from local storage if available
if (localStorage.getItem("dataJson")) {
  dataJson = JSON.parse(localStorage.getItem("dataJson"));
  refreshList(); // Update the list with the stored data
  toggleClearButton(); // Show or hide the clear button based on dataJson
}

const catchData = () => {
  textData = inputTextData.value;
  dataJson.push(textData);
  inputTextData.value = "";

  refreshList(); // Update the list with the new data

  // Store the updated dataJson array in local storage
  localStorage.setItem("dataJson", JSON.stringify(dataJson));
};

const clearEntry = () => {
  modalBox.classList.remove("display-none");
};

const remove = () => {
  modalBox.classList.add("display-none");
};

const deleteItems = () => {
  // Clear the dataJson array and update the list
  dataJson = [];
  listItem.innerHTML = "";
  modalBox.classList.add("display-none");

  // Clear the stored data from local storage
  localStorage.removeItem("dataJson");

  // Hide the clear button since there is no data
  clearButton.style.display = "none";
};
