import Ember from 'ember';

export default Ember.Route.extend({

    actions: {
      addItemToDB(params) {
        var newItem = this.store.createRecord('item', params);
        newItem.save();
        this.transitionTo('index');
      }
    }
});
