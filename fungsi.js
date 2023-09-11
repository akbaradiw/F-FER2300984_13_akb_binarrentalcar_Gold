var loadingContainer = document.getElementById("spinner-container");
var carInput = document.getElementById("carinput");
var carCard = document.getElementById("carcard");
var carImage = document.getElementById("carimage");
var carButton = document.getElementById("carbutton");
var car = [
  {
    key: "innova",
    imageSource: "./innoinnova.png",
  },
];

function showCard(key) {
  loadingContainer.classList.remove("d-none");

  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      var sewaMobil = car.find(function (item) {
        return item.key === key;
      });

      if (sewaMobil) {
        resolve(sewaMobil);
      } else {
        reject("error");
      }

      loadingContainer.classList.add("d-none");
    }, 1000);
  });
}

async function onSearchCar() {
  try {
    var searchResult = carInput.value;
    var result = await showCard(searchResult.toLowerCase());

    carCard.classList.remove("d-none");
    carImage.setAttribute("src", result.imageSource);
    carButton;
  } catch (error) {
    carCard.classList.add("d-none");
    alert(error);
  }
}
