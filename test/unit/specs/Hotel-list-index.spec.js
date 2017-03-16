import Vue from 'vue';
import hotelsListIndex from '@/components/hotels-list/index';

describe('hotelsListIndex.vue', () => {
  it('Should render contents ', () => {
    const vm = new Vue(hotelsListIndex).$mount();
    const renderedDom = typeof vm.$el.querySelector('.hotel-list');
    expect(renderedDom).to.equal('object');
  });
});

describe('hotelsListIndex.vue', () => {
  it('Should Fetch Data from the server', () => {
    const Ctor = Vue.extend(hotelsListIndex);
    const vm = new Ctor();
    vm.$mount();
    vm.fetchData();
    expect(vm.hotelList).to.be.an('array');
  });
});

describe('hotelsListIndex.vue', () => {
  it('Should have two children components "hotelsListItem" and "hotelsListHeader"', () => {
    const components = hotelsListIndex.components;
    expect(components).to.be.an('object').and.to.have.all.keys('hotelsListItem', 'hotelsListHeader');
  });
});
