import Ember from 'ember';

export default Ember.Component.extend({
  variantOption1: false,
  variantOption2: false,
  variantOption3: false,

  addOptionButton: function () {
    var variantOption1 = this.get('variantOption1');
    var variantOption2 = this.get('variantOption2');
    var variantOption3 = this.get('variantOption3');

    return !(variantOption1 && variantOption2 && variantOption3);
  }.property('variantOption1', 'variantOption2', "variantOption3"),

  willInsertElement: function() {
    this.set('optionValues1', []);
    this.set('optionValues2', []);
    this.set('optionValues3', []);
    this.set('optionValue1', []);
    this.set('optionValue2', []);
    this.set('optionValue3', []);
  },

  actions: {
    addVariants: function() {
      this.set('variantsExists', true);
      this.set('variantOption1', true);
    },

    removeVariants: function() {
      this.set('variantsExists', false);
    },

    createOptionValue1: function(text) {
      var record = {};
      
      if (this.get('optionValues1').length === 0) {
        record.id = 1;
      } else {
        record.id = this.get('optionValues1').length + 1;
      }

      record.name = text;

      var textAlreadyExist = this.get('optionValues1').findBy('name', text);
      if (textAlreadyExist) {
        alert(text+" already exist");
      } else {
        this.get('optionValues1').addObject(record);
        this.get('optionValue1').addObject(record);
      }
    },

    createOptionValue2: function(text) {
      var record = {};
      if (this.get('optionValues2').length === 0) {
        record.id = 1;
      } else {
        record.id = this.get('optionValues2').length + 1;
      }
      record.name = text;
      var textAlreadyExist = this.get('optionValues2').findBy('name', text);
      if (textAlreadyExist) {
        alert(text+" already exist");
      } else {
        this.get('optionValues2').addObject(record);
        this.get('optionValue2').addObject(record);
      }
    },

    createOptionValue3: function(text) {
      var record = {};
      if (this.get('optionValues3').length === 0) {
        record.id = 1;
      } else {
        record.id = this.get('optionValues3').length + 1;
      }
      record.name = text;
      var textAlreadyExist = this.get('optionValues3').findBy('name', text);
      if (textAlreadyExist) {
        alert(text+" already exist");
      } else {
        this.get('optionValues3').addObject(record);
        this.get('optionValue3').addObject(record);
      }
    },

    removeVariant: function(optionValue) {
      var self = this;
      if(optionValue === "variant1") {
        self.set('variantOption1', false);
        self.set('optionValue1', []);
      } else if(optionValue === "variant2") {
        self.set('variantOption2', false);
        self.set('optionValue2', []);
      } else if(optionValue === "variant3") {
        self.set('variantOption3', false);
        self.set('optionValue3', []);
      }
      if(this.get('variantOption1') === false && this.get('variantOption2') === false && this.get('variantOption3') === false) {
        self.set('variantsExists', false);
      }
    },

    addVariantOption: function() {
      var self = this;
      if(this.get('variantOption1') === false) {
        self.set('variantOption1', true);
      } else if(this.get('variantOption2') === false) {
        self.set('variantOption2', true);
      } else if(this.get('variantOption3') === false) {
        self.set('variantOption3', true);
      }
    }
  }
});
