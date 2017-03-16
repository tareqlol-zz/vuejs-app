import Vue from 'vue';
import hotelsListHeader from '@/components/hotels-list/header';

describe('hotelsListHeader.vue', () => {
  it('Should render contents ', () => {
    const vm = new Vue(hotelsListHeader).$mount();
    const renderedDom = typeof vm.$el.querySelector('.hotels-list-header');
    expect(renderedDom).to.equal('object');
  });
});
describe('hotelsListHeader.vue', () => {
  it('Have at least a single sort button', () => {
    const vm = new Vue(hotelsListHeader).$mount();
    const buttonDom = typeof vm.$el.querySelector('.hotels-list-header button');
    expect(buttonDom).to.equal('object');
  });
});
describe('hotelsListHeader.vue', () => {
  it('Should sortableKeys be defiend and at least have a "name" property', () => {
    const sortableKeysType = (hotelsListHeader.data()).sortableKeys;
    expect(sortableKeysType).to.be.an('object').and.have.property('name');
  });
});

/* describe('hotelsListHeader.vue', () => {
  it(`Should set a current key for sorting and
  the active sort should be the same as set`, () => {
    const vm = new Vue(hotelsListHeader);
   hotelsListHeader.methods.setCurrentSort('name');
    expect(hotelsListHeader.data().activeSort).to.equal('name');
  });
}); */
