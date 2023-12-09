const util = require( 'util');
const { PhepToan } = require("./pheptoan");

let soA = 200;
let soB = 100;


console.log(util.format(`Kết quả của phép cộng ${soA} + ${soB} là: ${PhepToan.tong(soA, soB)}`));
console.log(util.format(`Kết quả của phép trừ ${soA} - ${soB} là: ${PhepToan.hieu(soA, soB)}`));
console.log(util.format(`Kết quả của phép nhân ${soA} * ${soB} là: ${PhepToan.tich(soA, soB)}`));
console.log(util.format(`Kết quả của phép chia ${soA} / ${soB} là: ${PhepToan.thuong(soA, soB)}`));
console.log(util.format(`Kết quả của phép cân bậc ${soA} là: ${PhepToan.canBacHai(soA)}`));