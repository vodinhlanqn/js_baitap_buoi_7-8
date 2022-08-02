
var numberArr = [];

function getEle(num) {
    return document.getElementById(num);
}

function getNumber() {
    var number = Number(getEle('inputNumber').value);
    numberArr.push(number);
    getEle('txtArray').innerHTML = `Các số: ${numberArr} `;
    getEle('inputNumber').value = "";
}

// 1. Tổng các số dương trong mảng.

function calcSum() {
    var resultSum = 0;
    for (var i = 0; i < numberArr.length; i++) {
        if (numberArr[i] > 0)
            resultSum += numberArr[i];
    }
    getEle('txtCalcSum').innerHTML = `Tổng các số dương: ${resultSum} `;
}

// 2. Đếm có bao nhiêu số dương trong mảng.

function countPositiveNumber() {
    var countNumber = 0;
    for (var i = 0; i < numberArr.length; i++) {
        if (numberArr[i] > 0)
            countNumber += 1;
    }
    getEle('txtCountNumber').innerHTML = `Có ${countNumber} số dương`;
}


// 3. Tìm số nhỏ nhất trong mảng.

function findMin() {
    var minNumber = 1;
    for (var i = 0; i < numberArr.length; i++) {
        if (numberArr[i] < minNumber)
            minNumber = numberArr[i];
    }
    getEle('txtFindMin').innerHTML = `Số nhỏ nhất trong mảng:  ${minNumber} `;
}

// 4. Tìm số dương nhỏ nhất trong mảng.

function findMinPositive() {
    var newNumberArr = [];
    // Lặp qua mảng đã nhập, kiểm tra số nguyên dương ===> lưu vào 1 mảng khác toàn số nguyên dương
    for (var i = 0; i < numberArr.length; i++) {
        if (numberArr[i] > 0)
            newNumberArr.push(numberArr[i]);
    }

    // Kiểm tra độ dài mảng mới có lớn > 0 không?
    // lặp qua từng phần tử của mảng mới, xác định số nguyên dương nhỏ nhất 
    if (newNumberArr.length > 0) {
        for (var k = 0; k < newNumberArr.length; k++) {
            var minPosNumber = newNumberArr[0];
            if (newNumberArr[k] <= minPosNumber)
                minPosNumber = newNumberArr[k]
            getEle('txtFindMinPositive').innerHTML = `Số nguyên dương nhỏ nhất trong mảng:  ${minPosNumber} `;
        }
    } else {
        getEle('txtFindMinPositive').innerHTML = `Không có dương trong mảng`;
    }
}

// 5. Tìm số chẵn cuối cùng trong mảng.
function findEvenNum() {
    var numEven = 0;
    for (var i = 0; i < numberArr.length; i++) {
        if (numberArr[i] % 2 === 0) {
            numEven = numberArr[i];
            getEle('txtFindEvenNum').innerHTML = `Số chẵn cuối cùng trong mảng:  ${numEven} `;
        } else {
            getEle('txtFindEvenNum').innerHTML = `Trong mảng không có giá trị chẵn: -1 `;
        }
    }
}

//6. Đổi chỗ 2 giá trị trong mảng theo vị trí

function swap(a, b) {
    var temp = numberArr[a];
    numberArr[a] = numberArr[b];
    numberArr[b] = temp;
}

function swapNumber() {
    var result = "";
    result += "<p> Mảng ban đầu: " + numberArr + "</p>";
    swap(getEle('indexNumber1').value, getEle('indexNumber2').value);
    result += "<p>Mảng sau khi đổi: " + numberArr + "</p>";
    getEle('txtSwapNum').innerHTML = result;
    // getEle('txtSwapNum').innerHTML = `Mảng sau khi đổi: ${numberArr}`;

}

function sortIncrease() {
    numberArr.sort((a, b) => { return a - b });
    getEle('txtSortIncrease').innerHTML = `Mảng sau khi sắp xếp: ${numberArr}`;
}

function checkPrime(n) {
    if (n < 2) return false;
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

function findPrime() {
    for (var i = 0; i < numberArr.length; i++) {
        var n = -1;
        if (checkPrime(numberArr[i])) {
            n = numberArr[i];
            break;
        }
    }
    // output
    getEle('txtFindPrime').innerHTML = n;

}


// Câu số 9
var arrayNumberFloat = [];

function getFloat() {
    var number = Number(document.getElementById('inputNumber2').value);
    arrayNumberFloat.push(number);
    document.getElementById('txtArray2').innerHTML = `Các số: ${arrayNumberFloat} `;
    document.getElementById('inputNumber2').value = "";
}

function countInteger() {
    var count = 0;
    for (var i = 0; i < arrayNumberFloat.length; i++) {
        if (Number.isInteger(arrayNumberFloat[i])) {
            count++;
        }
    }
    getEle('txtCountInteger').innerHTML = count;

}

// Câu số 10


function compareInt() {
    var soDuong = 0;
    var soAm = 0;
    for (var i = 0; i < numberArr.length; i++) {
        numberArr[i] >= 0 ? soDuong++ : soAm++;
    }
    getEle('txtCompare').innerHTML = soDuong > soAm ? `Số Dương > Số Âm: ${soDuong} > ${soAm}` : `Số Âm > Số Dương: ${soAm} > ${soDuong}`;
}