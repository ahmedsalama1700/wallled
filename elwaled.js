$lines = document.querySelector(".lines");
$lines.onclick = function(){
    $ournav = document.querySelector(".links");
    $ournav.classList.toggle("show");
};



const lii = document.querySelectorAll(".link");
const sec = document.querySelectorAll("section");
onscroll = function () {
    var scrollpostion = document.documentElement.scrollTop;
    sec.forEach((section) => {
        if(
            scrollpostion >= section.offsetTop  - section.offsetHeight *0.25 &&
            scrollpostion < section.offsetTop + section.offsetHeight - section.offsetHeight *0.25

        ){
            var currentid = section.attributes.id.value;
            removeactiveclass();
            addactiveclass(currentid);
        }



    });
};

var removeactiveclass = function(){
    document.querySelectorAll("nav a").forEach((el)=> {
        el.classList.remove("active");
    });
};

var addactiveclass = function(id){
    var selector = `nav a[href="#${id}"]`;
    document.querySelector(selector).classList.add("active");
};