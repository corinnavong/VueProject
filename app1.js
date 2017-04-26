
	var app1 = new Vue({
		el: '#app1',
		data: {
			first: '',
			last: '',
			meals: 1,
		},
	computed: {
		fullmeal: function() {
			return this.first + " and " + this.last
		},
		level: function() {
			if (this.meals >= 10) {
				return "Bloated"
			} else if (this.meals >= 5) {
				return "Full"
			} else if (this.meals >= 0) {
				return "Hungry"
			} else if (this.meals >= (-5)) {
				return "Famished"
			} else {
				return "Dead"
			}
			}
	},
	
	})

