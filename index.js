(function(window, factory) {
  if (typeof exports === 'object') {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  } else {
    window.blurImageUrl = factory();
  }
})(this, function() {
  return function blurImageUrl(url, radius) {
    return new Promise(function(resolve) {
      var img = new Image();
      img.onload = function() {
        var w = img.naturalWidth;
        var h = img.naturalHeight;
        var canvas = document.createElement('canvas');
        canvas.style.width = w + 'px';
        canvas.style.height = h + 'px';
        canvas.width = w;
        canvas.height = h;
        var context = canvas.getContext('2d');
        context.filter = 'blur(' + radius + 'px)';
        context.drawImage(
          img,
          -radius,
          -radius,
          w + radius * 2,
          h + radius * 2
        );
        canvas.toBlob(function(blob) {
          resolve(URL.createObjectURL(blob));
          img.onload = null;
        });
      };
      img.src = url;
    });
  };
});
