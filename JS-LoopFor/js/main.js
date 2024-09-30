//12.1
sum = 0; 

for (i = 1; i <= 100; i++) { 
    sum += i; 
}

document.write("Tổng các số từ 1 đến 100 là: " + sum + "<br />");
//12.2
n = parseInt(prompt("Nhập một số tự nhiên n: "));
s = 0; 

if (n <= 0) {
    document.write("Vui lòng nhập một số tự nhiên lớn hơn 0.");
} else {
    for (i = 0; i < n; i++) {
        if (i % 3 === 0) { 
            s += i;
        }
    }
    document.write("Tổng các số chia hết cho 3 và nhỏ hơn " + n + " là: " + s + "<br />");
}
//12.3

w = 100; 
a = 0; 
b = 1;

document.write("100 số Fibonacci đầu tiên: <br />");

for ( count = 0; count < w; count++) {
    document.write(a + " ");
    next = a + b; 
    a = b;
    b = next; 
}

//12.4
//12.5