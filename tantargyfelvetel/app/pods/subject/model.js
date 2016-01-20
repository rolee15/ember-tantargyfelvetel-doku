import DS from 'ember-data';

const SubjectModel = DS.Model.extend({
  code: DS.attr('string'),
  name: DS.attr('string'),
  type: DS.attr('string'),
  credit: DS.attr('number')
});

SubjectModel.reopenClass({
    FIXTURES: [
        {
            code: 1,
            name: 'Alkfejl',
            type: 'GY',
            credit: 1,
        },    
        {
            code: 2,
            name: 'Alkfejl2',
            type: 'GY',
            credit: 2,
        },    
        {
            code: 3,
            name: 'Alkfejl3',
            type: 'GY',
            credit: 3,
        },    
    ]
});

export default SubjectModel;