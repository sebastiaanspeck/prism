Prism.languages['magik-module'] = {
	'module': {
		pattern: /^\w+\s+\d+$/m,
		inside: {
			'module-name': { pattern: /^\w+/ },
			'number': /\d+$/
		}
	},

	'keyword': [
		/^\s*(?:description|end|hidden|optional)\s*$/m,
		/^\s*(?:install_requires|required_by|requires|requires_datamodel|requires_java)\s*$/m,
		/^\s*(?:test|tests_modules)\s*$/m,
		/^\s*(?:do_not_translate|language|messages)\s*$/m,
		/^\s*(?:condition_message_accesor|templates)\s*$/m,
		/^\s*(?:ace_installation|auth_installation|case_installation|style_installation|system_installation)\s*$/m
	],

	'comment': {
		pattern: /#(?!#).*/,
		greedy: true,
	},
};
