const PhepToan = {
    tong: function(a, b) {
        a = parseFloat(a);
        b = parseFloat(b);
        let c = a + b;
        if (isNaN(c)) {
            console.log("Số nhập vào không phải là số");
        }
        return c;
    },
    hieu: function(a, b) {
        let c = a - b;
        return c;
    },
    tich: function(a, b) {
        let c = a * b;
        return c;
    },
    thuong: function(a, b) {
        if (b === 0) {
            return "Không thể chia cho 0";
        } else {
            let c = a / b;
            return c;
        }
    },
    canBacHai: function(number) {
        if (number < 0) {
            return "Không thể tính căn bậc hai của số âm";
        } else {
            return Math.sqrt(number);
        }
    }

};
module.exports = { PhepToan };


const PhepToan = {
    tong: function(a, b) {
        a = parseFloat(a);
        b = parseFloat(b);
        
        if (isNaN(a) || isNaN(b)) {
            throw new Error("Vui lòng nhập số hợp lệ");
        }

        return a + b;
    },
    hieu: function(a, b) {
        return a - b;
    },
    tich: function(a, b) {
        return a * b;
    },
    thuong: function(a, b) {
        if (b === 0) {
            throw new Error("Không thể chia cho 0");
        }
        return a / b;
    },
    canBacHai: function(number) {
        if (number < 0) {
            throw new Error("Không thể tính căn bậc hai của số âm");
        }
        return Math.sqrt(number);
    }
};

module.exports = { PhepToan };



// const PhepToan = {
//     tong: function(a, b) {
//         return a + b;
//     },
//     hieu: function(a, b) {
//         return a - b;
//     },
//     // Các hàm khác...
// };

// module.exports = { PhepToan };

