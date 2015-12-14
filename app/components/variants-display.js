import Ember from 'ember';

function createVariantsFromOptionValues(arg) {
  var r = [], max = arg.length-1;
  function helper(arr, i) {
      for (var j=0, l=arg[i].length; j<l; j++) {
        var a = arr.slice(0); // clone arr
        a.push(arg[i][j]);
        if (i===max)
            r.push(a);
        else
            helper(a, i+1);
      }
  }
  helper([], 0);
  return r;
};

function variantTexts(r) {
  var multipleVariants = [];
  for (var i = r.length - 1; i >= 0; i--) {
    multipleVariants[i] = {};
    multipleVariants[i].name = r[i].join('-');
  };
  return multipleVariants;
}

export default Ember.Component.extend({
  displayVariant: false,

  optionValuesObservable: function() {
    var self = this;
    var optionValue1 = this.get('optionValue1'),
        optionValue2 = this.get('optionValue2'),
        optionValue3 = this.get('optionValue3'),
        optionType1 = this.get('optionType1'),
        optionType2 = this.get('optionType2'),
        optionType3 = this.get('optionType3');

    var optionValue1Names, optionValue2Names, optionValue3Names;    

    if (optionValue1 !== undefined) {
      optionValue1Names  = optionValue1.getEach('name');
    }
    if(optionValue2 !== undefined) {
      optionValue2Names = optionValue2.getEach('name');
    }
    if(optionValue3 !== undefined) {
      optionValue3Names = optionValue3.getEach('name');
    }

    if(optionValue1Names && optionValue3Names && optionValue2Names) {
      if(optionValue1Names.length !== 0 || optionValue2Names.length !== 0 || optionValue3Names.length !==  0) {
        self.set('displayVariant', true);
      }
    }

    if(optionValue1 !== undefined && optionValue2 !== undefined && optionValue3 !== undefined) {
      if(optionValue1Names.length === 0 && optionValue2Names.length === 0 && optionValue3Names.length ===  0) {
        self.set('multipleVariants', []);
        self.set('displayVariant', false);
      }

      if(optionValue1Names.length !== 0 && optionValue2Names.length !== 0 && optionValue3Names.length !==  0) {
          var allArrays = [optionValue1Names, optionValue2Names, optionValue3Names];
          var r = createVariantsFromOptionValues(allArrays);
          self.set('multipleVariants', variantTexts(r));
      
      } else if(optionValue1Names.length !== 0 && optionValue2Names.length === 0 && optionValue3Names.length === 0) {
          var allArrays = [optionValue1Names];
          var r = createVariantsFromOptionValues(allArrays);
          self.set('multipleVariants', variantTexts(r));
      
      } else if(optionValue1Names.length === 0 && optionValue2Names.length !== 0 && optionValue3Names.length === 0) {
          var allArrays = [optionValue2Names];
          var r = createVariantsFromOptionValues(allArrays);
          self.set('multipleVariants', variantTexts(r));
      
      } else if(optionValue1Names.length === 0 && optionValue2Names.length === 0 && optionValue3Names.length !== 0) {
          var allArrays = [optionValue3Names];
          var r = createVariantsFromOptionValues(allArrays);
          self.set('multipleVariants', variantTexts(r));
      
      } else if(optionValue1Names.length !== 0 && optionValue2Names.length !== 0 && optionValue3Names.length === 0) {
          var allArrays = [optionValue1Names, optionValue2Names];
          var r = createVariantsFromOptionValues(allArrays);
          self.set('multipleVariants', variantTexts(r));
      
      } else if(optionValue1Names.length === 0 && optionValue2Names.length !== 0 && optionValue3Names.length !== 0) {
          var allArrays = [optionValue2Names, optionValue3Names];
          var r = createVariantsFromOptionValues(allArrays);
          self.set('multipleVariants', variantTexts(r));
      
      } else if(optionValue1Names.length !== 0 && optionValue2Names.length === 0 && optionValue3Names.length !== 0) {
          var allArrays = [optionValue1Names, optionValue3Names];
          var r = createVariantsFromOptionValues(allArrays);
          self.set('multipleVariants', variantTexts(r));
      } 
    }
  }.observes('optionValue1.[]', 'optionValue2.[]', 'optionValue3.[]')
});
