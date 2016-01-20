import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        submit(){
            this.get('onSave')({
                code: this.$('#code').val(),
                name: this.$('#name').val(),
                type: this.$('#type').val(),
                credit: this.$('#credit').val()
            });
        }
    }
});
