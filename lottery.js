//导航栏菜单
const molist = document.getElementsByClassName("molist")[0];
const yxgicon = document.getElementById("yxgicon");
const pcsearchicon = document.getElementById("pcsearchicond7");
const mosearchicon = document.getElementById("mosearchicond7");
const pcshopicon = document.getElementById("pcshopicond7");
const moshopicon = document.getElementById("moshopicond7");
const menuicon = document.getElementById("menuicond7");
let judgement = true;
menuicon.addEventListener("click", () => {
    if (judgement) {
        molist.classList.toggle("molistopen");
        menuicon.src = "img/closed7.png";
        yxgicon.style.visibility = "hidden";
        mosearchicon.style.visibility = "hidden";
        pcshopicon.style.visibility = "hidden";
        moshopicon.style.visibility = "hidden";
        judgement = !judgement
    } else {
        molist.classList.toggle("molistopen");
        menuicon.src = "img/menud7.png";
        setTimeout(() => {
            yxgicon.style.visibility = "visible";
            mosearchicon.style.visibility = "visible";
            pcshopicon.style.visibility = "visible";
            moshopicon.style.visibility = "visible";
        }, 400)
        judgement = !judgement
    }
});
//搜索
const pcsearch = document.getElementsByClassName("pcsearch")[0];
const mosearch = document.getElementsByClassName("mosearch")[0];
pcsearchicon.addEventListener("click", () => {
    pcsearch.classList.toggle("pcsearchopen");
});
pcsearch.addEventListener("mouseleave", () => {
    pcsearch.classList.toggle("pcsearchopen");
});
let judgement2 = true
mosearchicon.addEventListener("click", () => {
    if (judgement2) {
        mosearch.classList.toggle("mosearchopen");
        mosearchicon.src = "img/closed7.png";
        yxgicon.style.visibility = "hidden";
        menuicon.style.display = "none";
        moshopicon.style.display = "none";
        judgement2 = !judgement2
    } else {
        mosearch.classList.toggle("mosearchopen");
        mosearchicon.src = "img/searchd7.png";
        yxgicon.style.visibility = "visible";
        menuicon.style.display = "block";
        moshopicon.style.display = "block";
        judgement2 = !judgement2
    }
});
//购物袋
const pcshoplist = document.getElementsByClassName("pcshoplist")[0];
const moshoplist = document.getElementsByClassName("moshoplist")[0];
pcshopicon.addEventListener("click", () => {
    pcshoplist.classList.toggle("pcshoplistopen");
});
pcshoplist.addEventListener("mouseleave", () => {
    pcshoplist.classList.toggle("pcshoplistopen");
});
let judgement3 = true;
moshopicon.addEventListener("click", () => {
    if (judgement3) {
        moshoplist.classList.toggle("moshoplistopen");
        moshopicon.src = "img/closed7.png";
        yxgicon.style.visibility = "hidden";
        menuicon.style.display = "none";
        mosearchicon.style.display = "none";
        judgement3 = !judgement3
    } else {
        moshoplist.classList.toggle("moshoplistopen");
        setTimeout(() => {
            moshopicon.src = "img/shopd7.png";
            yxgicon.style.visibility = "visible";
            menuicon.style.display = "block";
            mosearchicon.style.display = "block"
        }, 500)
        judgement3 = !judgement3
    }
});
//抽签
const country = [[
    "CN",//中国
    "US",//美国
    "",
    ""
    /*
    "GB",//英国
    "AU",//澳大利亚
    "BR",//巴西
    "CA",//加拿大
    "HR",//克罗地亚
    "CU",//古巴
    "EG",//埃及
    "FR",//法国
    "FI",//芬兰
    "DE",//德国
    "IS",//冰岛
    "PE",//秘鲁
    "RU",//俄罗斯
    */
],
["中国", "美国"/*"英国","澳大利亚","巴西","加拿大","克罗地亚","古巴","埃及","芬兰","德国","冰岛","秘鲁","俄罗斯"*/]];
const CNcity = [[
    "",
    "PEK-01",//北京
    "SHA-02",//上海
    "CKG-03",//重庆
    "NKG-04",//南京
    "CTU-05",//成都
    "SZX-06",//深圳
    "CAN-07",//广州
    "WNZ-08",//温州
    "INC-09",//银川
    "CZX-10",//常州
    "HAK-11",//海口
    "KHN-12",//南昌
    "TAO-13",//青岛
    "TNA-14",//济南
    "SHA-15",//沈阳
    "URC-16",//乌鲁木齐
    "SJZ-17",//石家庄
    "HET-18",//呼和浩特
    "FOC-19",//福州
    "TJN-20",//天津
    "CGO-21",//郑州
    "XMN-22",//厦门
    "LHW-23",//兰州
    "JJN-24",//晋江
    "HCH-25",//杭州
    "XNN-26",//西宁
    "XUZ-27",//徐州
    "TYN-28",//太原
    "WUH-29",//武汉
    "CGQ-30",//长春
    "NGB-31",//宁波
    "KWL-32",//桂林
    "KWE-33",//贵阳
    "ZUH-34",//珠海
    "DLC-35",//大连
    "YIW-36",//义乌
    "HFE-37",//合肥
    "LXA-38",//拉萨
    "LJG-39",//丽江
    "NNG-40",//南宁
    "KMG-41",//昆明 
    "CSX-42",//长沙
    "SYX-43",//三亚
    "SIA-44",//西安
    "ZHA-45",//湛江
    "HRB-46",//哈尔滨
], [
    "", "北京", "上海", "重庆", "南京", "成都", "深圳", "广州", "温州", "银川", "常州", "海口", "南昌", "青岛", "济南", "沈阳",
    "乌鲁木齐", "石家庄", "呼和浩特", "福州", "天津", "郑州", "厦门", "兰州", "晋江", "杭州", "西宁", "徐州", "太原", "武汉", "长春", "宁波",
    "桂林", "贵阳", "珠海", "大连", "义乌", "合肥", "拉萨", "丽江", "南宁", "昆明", "长沙", "三亚", "西安", "湛江", "哈尔滨",
]];
const UScity = [[
    "ANC",//安克雷奇
    "ATL",//亚特兰大
    "AUS",//奥斯丁
    "BWI",//巴尔的摩
    "BOS",//波士顿
    "NYC",//纽约
    "STL",//圣路易斯
    "SFO",//旧金山
    "SEA",//西雅图
    "SAN",//圣地亚哥
], [
    "安克雷奇",
    "亚特兰大",
    "奥斯丁",
    "巴尔的摩",
    "波士顿",
    "纽约",
    "圣路易斯",
    "旧金山",
    "西雅图",
    "圣地亚哥"
]];
const loader = document.getElementsByClassName("loader")[0];
const lotteryouter = document.getElementsByClassName("lotteryouter")[0];
const check = document.getElementsByClassName("check")[0];
const not = document.getElementsByClassName("not")[0];
const code = document.getElementById("code");
const btn = document.getElementById("btn");
const name2 = document.getElementById("name2");
const gender2 = document.getElementById("gender2");
const age2 = document.getElementById("age2");
const number2 = document.getElementById("number2");
const name3 = document.getElementById("name3");
const gender3 = document.getElementById("gender3");
const age3 = document.getElementById("age3");
const number3 = document.getElementById("number3");
btn.addEventListener("click", lottery);
function lottery() {
    const namee = document.getElementById("name").value;
    const gender = document.getElementById("gender").value;
    const age = +document.getElementById("age").value;
    const number = document.getElementById("number").value;
    if (namee == '') { alert("请输入姓名\nerror：个人资料审核未通过"); return } else if
        (gender !== "男" && gender !== "女") {
        alert("请输入合法性别（请勿空行）\nerror：个人资料审核未通过");
        return
    } else if (age <= 0) { alert("请输入合法年龄\nerror：个人资料审核未通过"); return } else if (age > 100) { alert("您的年龄有待进一步验证") };
    lotteryouter.style.display = "none";
    loader.style.display = "block";
    setTimeout(() => { loader.style.display = "none"; }, 4800);
    const cou = Math.floor(Math.random() * 4);
    const CNc = Math.floor(Math.random() * 47);
    const USc = Math.floor(Math.random() * 10);
    const country_en = country[0][cou];
    const country_zh = country[1][cou];
    const CNcity_en = CNcity[0][CNc];
    const CNcity_zh = CNcity[1][CNc];
    const UScity_en = UScity[0][USc];
    const UScity_zh = UScity[1][USc];
    name2.innerText = `${namee}`;
    gender2.innerText = `${gender}`;
    age2.innerText = `${age}`;
    number2.innerText = `${number}`;
    name3.innerText = `${namee}`;
    gender3.innerText = `${gender}`;
    age3.innerText = `${age}`;
    number3.innerText = `${number}`;
    const copy = document.getElementById("copy");
    function later() {
        if (country_en === "") {
            not.style.display = "block";
            copy.style.display = "block"
        } else {
            function add0(m) {
                return m < 10 ? "0" + m : m
            }
            const w = new Date()
            const time =
                `${w.getFullYear()}` + add0(w.getMonth() + 1) + `${add0(w.getDate())}`;
            check.style.display = "block";
            let gendercode;
            if (gender === "男") { gendercode = 1 };
            if (gender === "女") { gendercode = 0 };
            let unfold = [...time, gendercode];
            let sum = +unfold[0] + +unfold[1] + +unfold[2] + +unfold[3] + +unfold[4] + +unfold[5] + +unfold[6] + +unfold[7] + gendercode;
            let verify = [...("" + sum)][1];
            if (country_en === "CN") {
                code.innerHTML = `${country_en}-${CNcity_en}-${time}-0001/${gendercode}${verify}`;
                duncity.innerHTML = `${country_zh}${CNcity_zh}地下城`;
                copy.style.display = "block"
            }
            if (country_en === "US") {
                code.innerHTML = `${country_en}-${UScity_en}-${time}-0001/${gendercode}${verify}`;
                duncity.innerHTML = `${country_zh}${UScity_zh}地下城`;
                copy.style.display = "block"
            }
        }
    }
    setTimeout(later, 5000)

}