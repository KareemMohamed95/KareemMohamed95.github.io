
 var mathInputBinding = new Shiny.InputBinding();
 var lastFocusedInput = null;

$.extend(mathInputBinding, {

  initialize: function(el) {
    el.mathFieldElement = document.getElementById(el.id);

    el.mathField = MQ.MathField(el.mathFieldElement, {
      handlers: {
        edit: function() {
          $(el).trigger('change');
        }
      }
    });
  },

  // find inputs
  find: function(scope) {
    return $(scope).find(".mathquill-editable");
  },

  getId: function(el) {
    return Shiny.InputBinding.prototype.getId.call(this, el) || el.name;
  },

  // retrieve value
  getValue: function(el) {
    el.value = el.mathField.latex();
    return el.value;
  },

  // set values
  setValue: function(el, value) {
    el.value = el.mathField.latex(value);
  },

  // handle messages from the server
  receiveMessage: function(el, data) {
    if (data.hasOwnProperty('value'))
      this.setValue(el, data.value);

    this._updateLabel(data.label, this._getLabelNode(el));

    $(el).trigger('change');
  },

  subscribe: function(el, callback) {
    $(el).on('input.mathInputBinding', function(event) {
      callback(true);
    });
    $(el).on('change.mathInputBinding', function(event) {
      callback(false);
    });
    $(el).on('focusin.mathInputBinding', function(event) { // on losing focus
      lastFocusedInput = el.id;
      // var result = {
      //   result: el.id,
      //   nonce: Math.random()
      // }
      // Shiny.onInputChange("focused_input", result);
    });
  },
  unsubscribe: function(el) {
    $(el).off('.mathInputBinding');
  },

  // the same as shiny's textInput
  getRatePolicy: function() {
    return {
      policy: 'debounce',
      delay: 250
    };
  },

  _getLabelNode: function(el) {
    return $(el).parent().find('label[for="' + escape(el.id) + '"]');
  },

  _updateLabel: function(a, b) {
    if ("undefined" != typeof a) {
      if (1 !== b.length)
          throw new Error("labelNode must be of length 1");
      var c = $.isArray(a) && 0 === a.length;
      c ? b.addClass("shiny-label-null") : (b.text(a),
      b.removeClass("shiny-label-null"));
    }
  }

});

Shiny.inputBindings.register(mathInputBinding, 'shinymath.mathInput');

Shiny.onInputChange("bindings_ready",Math.random());

function addSqrtSymbol(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).cmd("\\sqrt");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addNthRootSqrtSymbol(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).write("{()}^{\\frac{1}{3}}");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addFracSymbol(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).cmd("\\frac");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addPowerSymbol(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).cmd("^");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addEnglishNumber(number){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).cmd(number.toString());
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addEnglishPiSymbol(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).cmd("\\pi");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addEnglishCommaSymbol(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).cmd(".");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addSinSymbol(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).write("\\sin\\left(\\right)");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addSinSquareSymbol(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).write("{\\sin\\left(\\right)}^{2}");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addCosSymbol(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).write("\\cos\\left(\\right)");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addCosSquareSymbol(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).write("{\\cos\\left(\\right)}^{2}");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addTanSymbol(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).write("\\tan\\left(\\right)");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addTanSquareSymbol(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).write("{\\tan\\left(\\right)}^{2}");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addCosecSymbol(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).write("\\csc\\left(\\right)");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addCosecSquareSymbol(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).write("{\\csc\\left(\\right)}^{2}");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addSecSymbol(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).write("\\sec\\left(\\right)");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addSecSquareSymbol(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).write("{\\sec\\left(\\right)}^{2}");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addCotanSymbol(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).write("\\cot\\left(\\right)");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addCotanSquareSymbol(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).write("{\\cot\\left(\\right)}^{2}");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addEnglishTheta(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).write("\\theta");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addEnglishAlpha(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).write("\\alpha");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addEnglishBeta(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).write("\\beta");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addEnglishGamma(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).write("\\gamma");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}

function addPlusEnglish(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).write("+");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addMinusEnglish(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).write("-");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addPMEnglish(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).write("\\pm");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
// New design
function addNthRootSymbol(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).write("{()}^{\\frac{1}{3}}");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
} 
function addLeftParenthesesSymbol(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).cmd("(");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addRightParenthesesSymbol(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).cmd(")");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addAlphaSymbol(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).write("\\alpha");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addBetaSymbol(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).write("\\beta");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addGammaSymbol(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).write("\\gamma");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addThetaSymbol(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).write("\\theta");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addEpsilonSymbol(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).write("\\epsilon");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addPiSymbol(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).cmd("\\pi");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addPlusSign(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).write("+");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addMinusSign(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).write("-");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function clearQuillKeyboard(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).latex("");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addCdotSign(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).write("\\cdot");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addPMSign(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).write("\\pm");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addCommaSymbol(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).cmd(".");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addModulusSign(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).cmd("%");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addEqualSign(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).cmd("=");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addNumber(number){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).cmd(number.toString());
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
// New design
