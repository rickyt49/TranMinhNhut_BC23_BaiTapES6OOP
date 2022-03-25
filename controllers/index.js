import { Bill } from "../models/Bill.js";
import { Food } from "../models/Food.js";
import { Menu } from "../models/Menu.js";

let menu = new Menu();
document.querySelector("#addFood").onclick = () => {
  let food = new Food();
  let arrInput = document.querySelectorAll(" .baiTap1 .card .card-body input");

  for (let input of arrInput) {
    let { id, value } = input;
    food[id] = value;
  }
  menu.addFood(food);
  menu.renderFoodTable(".tblDanhMucMonAn");
};
window.deleteFood = (clickedId) => {
  menu.deleteFood(clickedId);
  menu.renderFoodTable(".tblDanhMucMonAn");
};
// ---------------------------------------------------------------

var arrMonAn = [
  { maMonAn: 1, tenMonAn: "Nước lẩu haidilao", giaTien: 100 },
  { maMonAn: 2, tenMonAn: "Mì cay thành đô", giaTien: 200 },
  { maMonAn: 3, tenMonAn: "Mực bạch ngọc", giaTien: 300 },
];

renderMenuTable(arrMonAn, ".baiTap2 .card-body .row");

function renderMenuTable(foodArr, selector) {
  let htmlContent = "";
  for (let key in foodArr) {
    htmlContent += `
      <div class="col-3">${foodArr[key].maMonAn}</div>
      <div class="col-3">${foodArr[key].tenMonAn}</div>
      <div class="col-3">${foodArr[key].giaTien}</div>
      <div class="col-3">
        <button class="bg-danger text-white btn">+</button>
        <button class="bg-danger text-white btn">-</button>
      </div>
 `;
  }
  document.querySelector(selector).innerHTML += htmlContent;
}

let bill = new Bill();
document.querySelectorAll(".baiTap2 .card-body .row button").onclick =
  function () {};
