let para = "    Mayank Sharma     ";
console.log("This is trim method", para.trim());
let fullPara = para.indexOf("Sharma");
console.log("This is indexof method finding position of Sharma:",fullPara);

// String Slice method
let para1 = "Iammayanksharma";
let fullPara1 = para1.slice(3, 9);
let fullpara2 = para1.slice(3, para1.length);
let fullpara3 = para1.slice(-3);
console.log(fullPara1);
console.log(fullpara2);
console.log(fullpara3);

// String Replace method
let para2 = "Iammayanksharma";
let newPara = para2.replace("mayank","prayank");
console.log(newPara);

// String Repeat method
let veg = "Tomato";
console.log(veg.repeat(5));

let str = "ApnaCollege";
let newStr = str.slice(4).replace("ll","tt");
console.log(newStr);