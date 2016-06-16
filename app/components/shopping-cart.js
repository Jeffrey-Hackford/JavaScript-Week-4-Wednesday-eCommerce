import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),


  shoppingCartTotalCost: Ember.computed('shoppingCart', function() {
    var totalCost = 0;
    this.get('shoppingCart.items').forEach(function(item){
      totalCost += parseFloat(item.get('cost'));
    });
    return totalCost;
  })
});
