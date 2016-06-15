import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addItemToDB() {
      var params = {
        name: this.get('name'),
        description: this.get('description'),
        image: this.get('image'),
        cost: this.get('cost'),
      };
      this.sendAction('addItemToDB', params);
    }
  }
});
