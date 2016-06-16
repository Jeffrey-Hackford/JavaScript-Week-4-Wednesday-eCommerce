import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addItemToDB() {
      var params = {
        name: this.get('name'),
        description: this.get('description'),
        image: this.get('image') ? this.get('image') : "http://www.iconsdb.com/icons/preview/black/question-mark-xxl.png",
        cost: this.get('cost'),
      };
      console.log(this.get('cost'));
      this.sendAction('addItemToDB', params);
    }
  }
});
