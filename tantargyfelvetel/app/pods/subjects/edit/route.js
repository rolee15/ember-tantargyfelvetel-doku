import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store.findRecord('subject', params.subject_id);
    }
});
