$(function() {
  var animateConsole = function() {
    $('.typed-1').typed({
      strings: ["./gradlew run <nobr>-Poutput-directory=small</nobr> <nobr>-Poutput-classes=50</nobr> <nobr>-Psubprojects=1</nobr>"],
      showCursor: false,
      onStringTyped: function() {
        var delay = 0;
        $('.line-seq').each(function() {
          var $line = $(this);
          setTimeout(function() {
            $line.show();
            if ($line.hasClass('line-seq-last')) {
              displayLastLines();
            }
          }, delay);
          delay += 500;
        });
      }
    });
  };

  var displayLastLines = function() {
    $('.dollar-2').show();
    $('.typed-2').typed({
      strings: ["cd small && gradle fatJar"],
      showCursor: false
    });
    setTimeout(function() {
      $('.dollar-3').show();
      $('.typed-3').typed({
        strings: ["java -cp small/build/libs/tester.jar helpers.Main"],
        showCursor: false
      });
    }, 1000);
  };

  setTimeout(animateConsole, 1000);
});
