import $ from 'jquery';

var ScrollCheck = {};

var getTime = Date.now || function () {
  return new Date().getTime();
};

(function($) {
  
  var scrollFireEventsHandled = false;
  // Input: Array of JSON objects {selector, offset, callback}
  ScrollCheck.scrollFire = function(options) {
    var onScroll = function() {
    var windowScroll = window.pageYOffset + window.innerHeight;
    for (var i = 0 ; i < options.length; i++) {
      // Get options from each line
      var value = options[i];
      var selector = value.selector,
          offset = value.offset,
          callback = value.callback;
      var currentElement = document.querySelector(selector);
      if ( currentElement !== null) {
        var elementOffset = currentElement.getBoundingClientRect().top + window.pageYOffset;
        if (windowScroll > (elementOffset + offset)) {
          if (value.done !== true) {
            if (typeof(callback) === 'function') {
              callback.call(this, currentElement);
            } else if (typeof(callback) === 'string') {
              var callbackFunc = new Function(callback);
              callbackFunc(currentElement);
            }
            value.done = false;
          }
        }
      }
    }
  };
  
  var throttledScroll = ScrollCheck.throttle(function() {
    onScroll();
  }, options.throttle || 100);
  if (!scrollFireEventsHandled) {
    window.addEventListener("scroll", throttledScroll);
    window.addEventListener("resize", throttledScroll);
    scrollFireEventsHandled = true;
  }
    // perform a scan once, after current execution context, and after dom is ready
    setTimeout(throttledScroll, 0);
  };
})();


var scroll = null; 

ScrollCheck.throttle = function (func, wait, options) {
  var context, args, result;
  var timeout = null;
  var previous = 0;
  options || (options = {});
  var later = function () {
    previous = options.leading === false ? 0 : getTime();
    timeout = null;
    result = func.apply(context, args);
    context = args = null;
  };
  return function () {
    var now = getTime();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0) {
      clearTimeout(timeout);
      timeout = null;
      previous = now;
      result = func.apply(context, args);
      context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
};
 
(function($) {
  var setActive = function(selector) {
    $('#link-to-research, #link-to-trading, #link-to-services').removeClass('active');
    $('#'+selector).addClass('active');
    if (scroll < (window.screen.height * .8) ) {
      $('#link-to-research, #link-to-trading, #link-to-services').removeClass('active');
    }
  }

  var options = [
    {selector: '#research', offset: 150, callback: function(e){
      setActive("link-to-research")
    } },
    {selector: '#trading', offset: 300, callback: function() {
      setActive("link-to-trading")
    } },
    {selector: '#services', offset: 150, callback: function() {
      setActive("link-to-services")
    } }
  ];
  ScrollCheck.scrollFire(options);

  $(window).scroll(function (event) {
    scroll = $(window).scrollTop();
    if(scroll > 60){
      $('.navbar').addClass('fixed');
    }else{
      $('.navbar').removeClass('fixed');
    }
  });
})($);
  