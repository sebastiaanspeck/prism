/* eslint-disable regexp/prefer-w */
Prism.languages['magik-module'] = {
	'module_name': {
		pattern: /^[a-zA-Z_]\w*(?=\s+\d)/m,
		lookbehind: false
	},

	'keyword': [
		/^\s*(?:description|end|hidden|optional)\s*$/im,
		/^\s*(?:install_requires|required_by|requires|requires_datamodel|requires_java)\s*$/im,
		/^\s*(?:tests|tests_modules)\s*$/im,
		/^\s*(?:do_not_translate|language|messages)\s*$/im,
		/^\s*(?:condition_message_accesor|templates)\s*$/im,
		/^\s*(?:ace_installation|auth_installation|case_installation|style_installation|system_installation)\s*$/im
	]
};