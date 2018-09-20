# Roman Numeral Converter

---

1.要求

- 将给定的数字转换成罗马数字
- 所有返回的罗马数字都应该是大写形式 

2.思路

- 分别定义个位、十位、百位、千位的对应罗马数字的数组
- 用Math.floor()取出数字的各个位上的数字，在之前定义的数组找到对应罗马数字加在一起即可

3.代码

    function convert(num) {
    var arr1 = ['','I','II','III','IV','V','VI','VII','VIII','IX'];
    var arr10 = ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'];
    var arr100 = ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'];
    var arr1000 = ['','M','MM','MMM'];
    num = arr1000[Math.floor(num/1000)]+arr100[Math.floor(num%1000/100)]+arr10[Math.floor(num%100/10)]+arr1[Math.floor(num%10)];
    return num;
    }
    convert(36);

4.相关链接

- http://www.mathsisfun.com/roman-numerals.html
- http://www.runoob.com/jsref/jsref-floor.html