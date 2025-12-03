Prism.languages['magik-product'] = {
	'product': {
		pattern: /^\w+\s*(?:config_product|customisation_product|layered_product)/m,
		inside: {
			'product-name': { pattern: /^\w+/ },
			'product-type': { pattern: /(?:config_product|customisation_product|layered_product)/ }
		}
	},

	'keyword': {
		pattern: /^\s*(?:description|end|title|requires|do_not_translate)\s*$/m,
	},

	'version': {
		pattern: /^\s*version\s*\d+(?:\.\d+){0,3}(?:-\d+)?/m,
		inside: {
			'keyword': /^\s*version/,
			'number': /\d+(?:\.\d+){0,3}(?:-\d+)?$/
		}
	},

	'comment': {
		pattern: /#(?!#).*/,
		greedy: true,
	},
};
