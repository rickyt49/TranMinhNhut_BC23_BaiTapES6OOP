export class Bill {
  maMonAn = "";
  tenMonAn = "";
  giaTien = 0;
  soLuong = 0;
  danhSachMonDaChon = [];
  constructor() {}
  tongGiaMotMon = () => {
    let tongGiaMotMon = this.giaTien * this.soLuong;
    return tongGiaMotMon;
  };
  tongGiaBill = () => {};
}
