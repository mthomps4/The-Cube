var sceneCSS = {
  "transform-style":"preserve-3d",
  "animation-name": "box2Roll",
  "animation-duration": "10s"
};

var reset = {
  "transform-style":"",
  "animation-name": "",
  "animation-duration": ""
}



      $("#StartA").on("click", function(){
        $(".scene2 .cube2").css(sceneCSS);
      });

      $("#Reset").on("click", function(){
        $(".scene2 .cube2").css(reset);
      });
