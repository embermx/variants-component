import Ember from 'ember';

export default Ember.Route.extend({

  setupController: function(controller) {
    controller.set('optionType1', 'Size');
    controller.set('optionType2', 'Color');
    controller.set('optionType3', 'Material');
  }

  // willInsertElement: function() {
  //   var self = this;
  //   var storeInstance = this.get('storeInstance');

  //   storeInstance.find('taxon').then(function (taxons) {
  //     var filteredTaxons = taxons.filter(function (availableTaxons) {
  //       return availableTaxons.get('parentId') !== null;
  //     });
  //     self.set('taxons', filteredTaxons);
  //   });
  //   storeInstance.find('product-unit').then(function (units) {
  //     self.set('units', units);
  //   });

  //   var inventories = [
  //                     {
  //                       id: 1,
  //                       name: "Don't track inventory"
  //                     },
  //                     {
  //                       id: 2,
  //                       name: "Track this product's inventory"
  //                     }
  //                   ];

  //   this.set('inventories', inventories);
  // },

  // actions: {
    // newProduct: function() {
    //   var fields = this.controller.get('fields');
    //   fields.optionType1 = this.get('optionType1');
    //   fields.optionType2 = this.get('optionType2');
    //   fields.optionType3 = this.get('optionType3');
    //   this.sendAction();
    // },

    // createUnit: function(text) {
    //   var self = this;
    //   var productUnit = {};
    //   productUnit.name = text;
    //   var storeInstance = this.get('storeInstance');
    //   storeInstance.createRecord('product-unit', productUnit).save().then(function(record) {
    //     self.get('units').addObject(record);
    //     self.set('fields.unit', record.id);
    //   });
    // },

    // enableDisableInventory: function(selection) {
    //   if(selection.name === "Track this product's inventory") {
    //     this.set('inventoryEnabled', true);
    //   } else {
    //     this.set('inventoryEnabled', false);
    //   }
    // }
  // }
});
