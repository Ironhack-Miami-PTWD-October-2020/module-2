console.log("start");
const brands = ["BMW", "Tesla", "Mercedes"];
const models = [1, 2, 3];
const color = ["Green", "Red", "Blue"];

function getBrands(callback) {
  setTimeout(() => {
    console.log("We got our data");
    callback(brands);
  }, 1000);
}

function getModel(brand, callback) {
  setTimeout(() => {
    console.log("We got our model", brand);
    callback(models);
  }, 1000);
}

function getColors(model, callback) {
  setTimeout(() => {
    console.log("The model is", model);
    callback(color);
  }, 1000);
}

getBrands((brandsResponse) => {
  console.log(brandsResponse);
  getModel(brandsResponse[0], (modelsResponse) => {
    console.log(modelsResponse);
    getColors(modelsResponse[1], (colorResponse) => {
      console.log(colorResponse);
    });
  });
});

console.log("end");
