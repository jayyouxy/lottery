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
//页脚
const aboutlink = document.getElementById("aboutlink");
const mobottomlist = document.getElementsByClassName("mobottomlist")[0];
const aboutlink2 = document.getElementById("aboutlink2");
const mobottomlist2 = document.getElementsByClassName("mobottomlist2")[0];
const aboutlink3 = document.getElementById("aboutlink3");
const mobottomlist3 = document.getElementsByClassName("mobottomlist3")[0];
const aboutlink4 = document.getElementById("aboutlink4");
const mobottomlist4 = document.getElementsByClassName("mobottomlist4")[0];
const aboutlink5 = document.getElementById("aboutlink5");
const mobottomlist5 = document.getElementsByClassName("mobottomlist5")[0];
const aboutlink6 = document.getElementById("aboutlink6");
const mobottomlist6 = document.getElementsByClassName("mobottomlist6")[0];
const add = document.getElementById('add');
const add2 = document.getElementById('add2');
const add3 = document.getElementById('add3');
const add4 = document.getElementById('add4');
const add5 = document.getElementById('add5');
const add6 = document.getElementById('add6');
let ifopen = true;
let ifopen2 = true;
let ifopen3 = true;
let ifopen4 = true;
let ifopen5 = true;
let ifopen6 = true;
function bottomlink(q, w, e, r,t) {
    q.addEventListener("click", () => {
        if(t){
        w.classList.toggle(e);
        r.innerText = "×"
        t = !t
    }else{
        w.classList.toggle(e);
        r.innerText = "+"
        t = !t
    }
    })
}
bottomlink(aboutlink, mobottomlist, "mobottomlistopen", add,ifopen);
bottomlink(aboutlink2, mobottomlist2, "mobottomlist2open", add2,ifopen);
bottomlink(aboutlink3, mobottomlist3, "mobottomlist3open", add3,ifopen);
bottomlink(aboutlink4, mobottomlist4, "mobottomlist4open",add4, ifopen);
bottomlink(aboutlink5, mobottomlist5, "mobottomlist5open",add5, ifopen);
bottomlink(aboutlink6, mobottomlist6, "mobottomlist6open", add6,ifopen);

