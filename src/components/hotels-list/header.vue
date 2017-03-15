<template>
	<section class="hotels-list-header">
		Sort By :
      <button 
      	v-for="(value,key) in sortableKeys"
      	v-bind:class="[
	      		key,
	      		{'hotels-list-header-item--asc' : value.ascending && activeSort === key},
	      		{'hotels-list-header-item--dec' : !value.ascending  && activeSort === key},
	      		'hotels-list-header-item'
      		]
      		"
      	@click="isSortable(key) ? setCurrentSort(key) : null" >
      		{{key}}
    	</button>
    </section>
</template>

<script>   
// load the scss file for the item
import '../scss/header.scss'

export default {
  name: 'hotels-list-header',
  data () {
    return {
    	/**
    	 * [sortableKeys sortable cells of the list, with provided example for type checking inside the sorting]
    	 * @type {Object}
    	 */
			sortableKeys : {
				name : {
					ascending : true,
					example : 'string'
				},
				price : {
					ascending : true,
					example : 399
				},
				category : {
					ascending : true,
					example : 12
				}
			},
			// set an empty active sort
			activeSort : ''
    }
  },
  methods : {
  	/**
  	 * [isSortable check if the current key is able to be sorted]
  	 * @param  {[String]}  currentKey [Selected Key ]
  	 * @return {Boolean}            [if the key is sortable or not!]
  	 */
  	isSortable (currentKey){
  		let keys = Object.keys(this.sortableKeys);
  		return keys.indexOf(currentKey) != -1;
  	},
  	/**
  	 * [setCurrentSort Sort the items of the hotels list]
  	 * @param {[String]} key [current Key]
  	 * @return {void}        [sort the hotel list array]
  	 */
  	setCurrentSort (key){
  		// set the items from the parent
  		// @TODO : better implementation for passing the hotel list, rather than using $parent,and hotelList,
  		// @TODO : we shouldn't affect the parent list directly !
  		let items = this.$parent.hotelList;
  		//get the sort object settings
  		let currentSortObject = this.sortableKeys[key];
  		// check the type from the example.
			if(typeof currentSortObject.example === 'number'){
				// number sorting
				items.sort(function (a,b) {
					return currentSortObject.ascending ?  b[key] - a[key] :  a[key] - b[key];
	  		});
			}else{
				// string sorting
				items.sort(function(a, b) {
						//  this to handle the capitalize of the first characters
				    var textA = a.name.toUpperCase();
				    var textB = b.name.toUpperCase();
				    // "a" < "b" == true  in javascript is unicode comparison
				    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
				});
				// reverse the list in case 
				currentSortObject.ascending ? items.sort().reverse() : items; 
			}
			//setting the opposite of the current order direction (ascending | descending)
  		currentSortObject.ascending = !currentSortObject.ascending;
  		// setting the latest active sort to the current
  		this.activeSort = key;
  	}
  }
 
}
</script>