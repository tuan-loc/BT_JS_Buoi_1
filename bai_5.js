// Bài 5: Tính tổng 2 ký số

// Nhập giá trị
var num = 44;

// Tính toán
var so_hang_dv = num % 10;
var so_hang_chuc = Math.floor(num / 10);
var tong = so_hang_chuc + so_hang_dv;

// Xuất kết quả
console.log('Tổng 2 ký số của số vừa nhập', tong)