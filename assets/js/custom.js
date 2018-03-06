// vertical menu home icon
$("#fp-nav").prepend(`
<div class="clearfix">
<h5 class="l-right" id="GoNDEHome">
    <a href="earth.html">
        <span class="fui-home"></span>
    </a>
</h5>
</div>`);

$("#GoNDEHome").on("click", function(){
    window.location.href = "earth.html";
})