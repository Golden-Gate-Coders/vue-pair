document.addEventListener("DOMContentLoaded", function(event) { 

  var app = new Vue({
    el: '#calculator',
    data: {
      expression: '0'
    },
    methods: {
      addToExpression: function(term) {
        if (this.expression == '0') {
          this.expression = String(term);
        } else {
          this.expression += String(term);
        }
      },
      evaluate: function() {
        this.expression = eval(this.expression);
      },
      clear: function() {
        this.expression = '0';
      }
    }
  });

});
