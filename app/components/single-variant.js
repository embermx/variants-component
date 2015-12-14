import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createOptionValue1: function(text) {
      this.sendAction('create-item', text);
    },

    createOptionValue2: function(text) {
      this.sendAction('create-item', text);
    },

    createOptionValue3: function(text) {
      this.sendAction('create-item', text);
    },

    removeVariant: function(variant) {
      this.sendAction('removeVariant', variant);
    }
  }
});
