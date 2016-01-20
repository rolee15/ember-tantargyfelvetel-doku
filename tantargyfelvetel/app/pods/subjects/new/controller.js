import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newSubject(formData) {
            console.log(formData);
            var subject = this.store.createRecord('subject', {
                code: 'kód',
                name: 'név',
                type: 'típus',
                credit: 'kredit'
            });
            subject.save();
            this.transitionToRoute('subjects.list');
        }
    }
});
