

function checkYuGiOh(n){
     const result = [];
    let store = "";
    for(let currentValue = 1; currentValue <= n; currentValue++){
      if (
        currentValue % 2 === 0 &&
        currentValue % 3 == 0 &&
        currentValue % 5 == 0
      ) {
        store = "yu-gi-oh";
        result.push(store);
      } else if (currentValue % 2 === 0 && currentValue % 5 == 0) {
        store = "yu-oh";
        result.push(store);
      } else if (currentValue % 3 === 0 && currentValue % 5 == 0) {
        store = "gi-oh";
        result.push(store);
      } else if (currentValue % 2 === 0 && currentValue % 3 == 0) {
        store = "yu-gi";
        result.push(store);
      } else if (currentValue % 2 === 0) {
        store = "yu";
        result.push(store);
      } else if (currentValue % 3 === 0) {
        store = "gi";
        result.push(store);
      } else if (currentValue % 5 === 0) {
        store = "oh";
        result.push(store);
      } else {
        result.push(currentValue);
      }
    }
return result
}

console.log(checkYuGiOh(30));