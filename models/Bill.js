export class Bill {
  danhSachMonDaChon = [];
  tongGia = 0;
  constructor() {}
  themMonVaoBill = (maMonAn, arrMonAn) => {
    let timMon = this.danhSachMonDaChon.find(
      (item) => item.maMonAn === maMonAn
    );
    if (timMon) {
      timMon.soLuong += 1;
    } else {
      let layMonTuMang = arrMonAn.find(
        (addedFood) => addedFood.maMonAn === maMonAn
      );
      layMonTuMang.soLuong = 1;
      this.danhSachMonDaChon.push(layMonTuMang);
    }
    this.tinhGiaMon();
    this.tinhTongGia();
  };
  xoaMonKhoiBill = (maMonAn) => {
    let timIdxMon = this.danhSachMonDaChon.findIndex(
      (item) => item.maMonAn === maMonAn
    );
    if (timIdxMon != -1) {
      if (this.danhSachMonDaChon[timIdxMon].soLuong > 1) {
        this.danhSachMonDaChon[timIdxMon].soLuong -= 1;
      } else {
        this.danhSachMonDaChon.splice(timIdxMon, 1);
      }
    }
    this.tinhGiaMon();
    this.tinhTongGia();
  };
  tinhGiaMon = () => {
    for (let i = 0; i < this.danhSachMonDaChon.length; i++) {
      let monChon = this.danhSachMonDaChon[i];
      monChon.giaMotMon = monChon.giaTien * monChon.soLuong;
    }
    return this.giaMotMon;
  };
  tinhTongGia = () => {
    let tongGiaTien = 0;
    this.danhSachMonDaChon.forEach((item) => {
      tongGiaTien += item.giaTien * item.soLuong;
    });
    this.tongGia = tongGiaTien;
  };
}
