import Vue from 'vue';
import hotelsListItem from '@/components/hotels-list/item.vue';

describe('hotelsListItem.vue', () => {
  it('Should render contents ', () => {
    const vm = new Vue(hotelsListItem).$mount();
    const renderedDom = typeof vm.$el.querySelector('.hotels-list-items');
    expect(renderedDom).to.equal('object');
  });
});

describe('hotelsListItem.vue', () => {
  it('Should render a hotel item in the list with a dummy name "testHotel"', () => {
    const Ctor = Vue.extend(hotelsListItem);
    const vm = new Ctor({ propsData: { hotelList: [{ name: 'testHotel' }] } }).$mount();
    expect(vm.$el.querySelector('.hotel-item-name').textContent).to.equal('testHotel');
  });
});
