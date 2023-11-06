let cars = [];
let indexOfEditedCar = null;


const saveButton = document.getElementById("save_button");
const editNameInput = document.getElementById("edit-name");
const editDescriptionInput = document.getElementById("edit-description");
const editPriceInput = document.getElementById("edit-price");
const editTypeSelect = document.getElementById("edit-type");


function addCar() {
  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const price = parseFloat(document.getElementById("price").value);
  const type = document.getElementById("type").value;

  if (!name || isNaN(price) || price < 0 || !type) {
    alert("Будь ласка, заповніть всі обов'язкові поля та введіть коректну ціну.");
    return;
  }


  const car = {
    name: name,
    description: description,
    price: price,
    type: type,
  };


  cars.push(car);


  document.getElementById("name").value = "";
  document.getElementById("description").value = "";
  document.getElementById("price").value = "";
  document.getElementById("type").value = "";

  displayCars();
}


function displayCars() {
  const carList = document.getElementById("car_list");


  carList.innerHTML = "";

  cars.forEach((car, index) => {
    const carDiv = document.createElement("div");
    carDiv.classList.add("car-item");

    const carInfo = `
      <h3>${car.name}</h3>
      <p>Description: ${car.description}</p>
      <p>Price: $${car.price.toFixed(2)}</p>
      <p>Type: ${car.type}</p>
    `;

    carDiv.innerHTML = carInfo;


    const editButton = document.createElement("button");
    editButton.classList.add("edit_button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => {
      openEditModal(index);
    });

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete_button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      carList.removeChild(carDiv);
      cars.splice(cars.indexOf(car), 1);
    });

    carDiv.appendChild(editButton);
    carDiv.appendChild(deleteButton);

    carList.appendChild(carDiv);
  });
}

function openEditModal(index) {

  indexOfEditedCar = index;


  const carToEdit = cars[index];

  editNameInput.value = carToEdit.name;
  editDescriptionInput.value = carToEdit.description;
  editPriceInput.value = carToEdit.price;
  editTypeSelect.value = carToEdit.type;


  document.getElementById("myModal").style.display = "block";
}

const save_button = document.getElementById("save_button");
save_button.addEventListener("click", saveEditedCar);

function saveEditedCar() {
  const editedCar = {
    name: editNameInput.value,
    description: editDescriptionInput.value,
    price: parseFloat(editPriceInput.value),
    type: editTypeSelect.value,
  };

  if (!editedCar.name || isNaN(editedCar.price) || editedCar.price < 0 || !editedCar.type) {
    alert("Please fill in all required fields.");
    return;
  }

  cars[indexOfEditedCar] = editedCar;

  document.getElementById("myModal").style.display = "none";

  displayCars();
}
document.getElementById("cancel_button").addEventListener("click", cancelEdit);
function cancelEdit() {
  editNameInput.value = "";
  editDescriptionInput.value = "";
  editPriceInput.value = "";
  editTypeSelect.value = "";

  document.getElementById("myModal").style.display = "none";
}


const clearButton = document.getElementById("clear_button");

clearButton.addEventListener("click", clearPage);

function clearPage() {

  cars = [];


  const carList = document.getElementById("car_list");
  carList.innerHTML = "";


  document.getElementById("name").value = "";
  document.getElementById("description").value = "";
  document.getElementById("price").value = "";
  document.getElementById("type").value = "";

  document.getElementById("myModal").style.display = "none";
}