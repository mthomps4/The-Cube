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



//playKeyframe Shorthand
// $(selector).playKeyframe(
//     'trapdoor-sequence 1s linear 0s infinite normal forwards',
//     complete
// );

//Sample Keyframe Markup
// var shake_start = {'transform': 'translate(0px)'};
// var shake_odd1 = {'transform': 'translate(-10px, -10px)'};
// var shake_even1 = {'transform': 'translate(10px, 10px)'};
// var shake_odd2 = {'transform': 'translate(10px, -10px)'};
// var shake_even2 = {'transform': 'translate(-10px, 10px)'};
//
// $.keyframe.define([{
//     name: 'crazy',
//     '0%': shake_start,
//     '10%': shake_odd2,
//     '20%': shake_even1,
//     '30%': shake_odd2,
//     '40%': shake_even2,
//     '50%': shake_odd2,
//     '60%': shake_even1,
//     '70%': shake_odd1,
//     '80%': shake_even2,
//     '90%': shake_odd1
//     }
// ]);


// $(selector).playKeyframe({
//     name: 'trapdoor-sequence', // name of the keyframe you want to bind to the selected element
//     duration: '1s', // [optional, default: 0, in ms] how long you want it to last in milliseconds
//     timingFunction: 'linear', // [optional, default: ease] specifies the speed curve of the animation
//     delay: '0s', //[optional, default: 0s]  how long you want to wait before the animation starts
//     iterationCount: 'infinite', //[optional, default:1]  how many times you want the animation to repeat
//     direction: 'normal', //[optional, default: 'normal']  which direction you want the frames to flow
//     fillMode: 'forwards', //[optional, default: 'forward']  how to apply the styles outside the animation time, default value is forwards
//     complete: function(){} //[optional] Function fired after the animation is complete. If repeat is infinite, the function will be fired every time the animation is restarted.
// });
