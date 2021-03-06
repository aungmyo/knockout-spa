define(['jsface', 'ko', 'text!./page-source-display.html', 'css!./page-source-display.css', 'sugar'], function (
  Class, ko, template) {

  var PageSourceDisplay = Class({
    $static: {
      FILE_TYPES: ['js', 'html', 'css']
    },
    constructor: function (params) {
      this.files = PageSourceDisplay.FILE_TYPES.map(function (type) {
        return {
          type: type,
          path: params[type]
        }
      }).remove(function(file) { return !file.path; });
      this.show = false;
      ko.observe(this);
    }
  });

  return {
    viewModel: PageSourceDisplay,
    template: template
  };

});
