
var lastFocusedInput = null;
var mathInputBinding = new Shiny.InputBinding();

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
      //console.log("getvalue");
      el.value = map(el.mathField.latex());
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
        // var result = {
        //   result: el.id,
        //   nonce: Math.random()
        // }
        // Shiny.onInputChange("focused_input", result);
        lastFocusedInput = el.id;
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
    MQ.MathField(document.getElementById(lastFocusedInput)).write("{\\left(\\right)}^{\\frac{١}{٣}}");
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
function addArabicNumber(number){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).cmd(englishMapping[number]);
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addArabicPiSymbol(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).cmd("ط");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addArabicCommaSymbol(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).cmd(",");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addArabicSinSymbol(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).write("جا\\left(\\right)");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addArabicSinSquareSymbol(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).write("{جا\\left(\\right)}^{٢}");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addArabicCosSymbol(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).write("جتا\\left(\\right)");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addArabicCosSquareSymbol(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).write("{جتا\\left(\\right)}^{٢}");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addArabicTanSymbol(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).write("ظا\\left(\\right)");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addArabicTanSquareSymbol(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).write("{ظا\\left(\\right)}^{٢}");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addArabicCosecSymbol(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).write("قتا\\left(\\right)");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addArabicCosecSquareSymbol(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).write("{قتا\\left(\\right)}^{٢}");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addArabicSecSymbol(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).write("قا\\left(\\right)");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addArabicSecSquareSymbol(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).write("{قا\\left(\\right)}^{٢}");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addArabicCotanSymbol(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).write("ظتا\\left(\\right)");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addArabicCotanSquareSymbol(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).write("{ظتا\\left(\\right)}^{٢}");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addArabicTheta(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).write("\\theta");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addArabicAlpha(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).write("\\alpha");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addArabicBeta(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).write("\\beta");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function addArabicGamma(){
  if(lastFocusedInput == null)return;
  MQ.MathField(document.getElementById(lastFocusedInput)).write("\\gamma");
  MQ.MathField(document.getElementById(lastFocusedInput)).focus();
}
function map(latex) {
  let newLatex = "";
  for(var i = 0;i < latex.length;i++) {
    let mappedWord = "";
    let j = i;
    while(1) {
      if(j == latex.length || isArabicChar(latex[j]) == false) {
        break;
      }
      mappedWord += latex[j];
      j++;
    }
    if(mappedWord.length == 0){
      let finalMappedWord = arabicMapping[latex[i]];
      if(!(finalMappedWord === undefined || finalMappedWord === null))newLatex += finalMappedWord;
      else newLatex += latex[i];
    }
    else {
      let finalMappedWord = arabicMapping[mappedWord];
      if(!(finalMappedWord === undefined || finalMappedWord === null))newLatex += finalMappedWord;
      i = j-1;
    }
  }
  return newLatex;
}

function isArabicChar(char) {
  if(char == 'أ' || char == 'ا' || char == 'ب' || char == 'ج' || char == 'د' || char == 'ه' || char == 'و'
   ||char == 'س' || char == 'ص' || char == 'ع' || char == 'ت' || char == 'ظ' || char == 'ط' || char == "ر"
   ||char == 'ق')return true;
   return false;
}
var arabicMapping = {
  "٠": "0",
  "١": "1",
  "٢": "2",
  "٣": "3",
  "٤": "4",
  "٥": "5",
  "٦": "6",
  "٧": "7",
  "٨": "8",
  "٩": "9",
  "س": "x",
  "ص": "y",
  "ع": "z",
  "ر": "r",
  "أ": "a",
  "ب": "b",
  ",": ".",
  "جا": "\\sin",
  "جتا": "\\cos",
  "ظا": "\\tan",
  "قتا": "\\csc",
  "قا": "\\sec",
  "ظتا": "\\cot",
  "ط": "\\pi"
}
var englishMapping = {
  "0": "٠",
  "1": "١",
  "2": "٢",
  "3": "٣",
  "4": "٤",
  "5": "٥",
  "6": "٦",
  "7": "٧",
  "8": "٨",
  "9": "٩"
}
