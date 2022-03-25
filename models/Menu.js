export class Menu {
  foodList = [];
  constructor() {}
  renderFoodTable = (selector) => {
    let htmlTrContent = "";
    for (let key in this.foodList) {
      htmlTrContent += `
                <tr>
                  <td>${this.foodList[key].maMonAn}</td>
                  <td>${this.foodList[key].tenMonAn}</td>
                  <td>${this.foodList[key].giaTien}</td>
                  <td><img style="width: 100px; height: 100px"src="${this.foodList[key].linkAnh}"/></td>
                  <td>
                      <button class="btn btn-danger" onclick="deleteFood('${this.foodList[key].maMonAn}')">Xoá</button></td>
                </tr>
                `;
    }
    document.querySelector(selector).innerHTML = htmlTrContent;
  };
  addFood = (food) => {
    this.foodList.push(food);
    return this.foodList;
  };
  deleteFood = (clickedId) => {
    this.foodList = this.foodList.filter(
      (newFood) => newFood.maMonAn !== clickedId
    );
    return this.foodList;
  };
}
