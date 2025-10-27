/* eslint-disable regexp/prefer-w */
Prism.languages.magik = {
	'pragma': {
		pattern: /_pragma.*/,
		alias: 'prolog'
	},

	'slot': {
		pattern: /(^|[\s({])\.\s*([A-Za-z_]+)/,
		lookbehind: true
	},

	'regex': {
		pattern: /\/(?:(?!\/)(?:\\.|[^\\\/\r\n])*\/[qisdlmuCX]*|\/)/,
		greedy: true
	},


	'declaration': [
		{ pattern: /(_package\s).*/, greedy: true, lookbehind: true },
		{ pattern: /(\b_global\s+)(?!_)\w+/, greedy: true, lookbehind: true },
		{ pattern: /(\b_constant\s+)([a-zA-Z_]+)/, lookbehind: true, greedy: true }
	],

	'comment': [
		{ pattern: /##.*/, greedy: true, alias: 'documentation' }, // documentation
		{ pattern: /#(?!#).*/, greedy: true }, // comments
	],

	'function': [
		{ pattern: /\b_(?:abstract|endmethod|iter|method|private)\b/, greedy: true }, // method keywords
		{ pattern: /\b_(?:endproc|proc)\b/ }, // procedure
		{ pattern: /(\.)\s*\|[A-Za-z_]\w*[!?]?\|/, lookbehind: true }, // encased |methodNames|
		{ pattern: /(\.)\s*[A-Za-z_]\w*[!?]?/, lookbehind: true }, // methods
		{ pattern: /(\.)\s*(\|[A-Za-z_0-9?!]+\||[A-Za-z_0-9?!]+)/, lookbehind: true } // all in one regex
	],

	'self': [
		{
			pattern: /(_method )\S+(?=\.)/,
			greedy: true,
			lookbehind: true
		},
		{
			pattern: /_self/,
			greedy: true
		}
	],

	'operator': [
		/\^<</, /<</, { pattern: /_(?:and|andif|or|orif|xor)<</, greedy: true }, { pattern: /(?:\*\*\^?|\*\^?|\/\^?|_mod\^?|_div\^?|-\^?|\+\^?)<</, greedy: true }, // assignment operators
		{ pattern: /(?:\*\*\^?|\*\^?|\/\^?|-\^?|\+\^?)<</, greedy: true }, // assignment operators
		/<>/, />=/, /<=/, /</, { pattern: /(^|[^>])>(?!>)/, lookbehind: true }, /~=/, /=/, // relational operators
		/\*\*/, /\*/, /\//, // arithmetic operators
		/\+/, /-/, /~/, // unary operators
	],

	'keyword-operator': [
		{ pattern: /\b_(?:cf|is|isnt)\b/i, alias: 'keyword' }, // comparison
		{ pattern: /\b_(?:div|mod)\b/i, alias: 'keyword' } // math
	],

	'keyword': [
		/\b_(?:class|dynamic|global|import|local)\b/i, // variables
		/\b_(?:block|endblock)\b/i, // block
		/\b_(?:elif|else|endif|if|then)\b/i, // if
		/\b_(?:and|andif|not|or|orif|xor)\b/i, // logical operators
		/\b_(?:continue|endloop|finally|for|leave|loop|loopbody|over|while)\b/i, // loop
		/\b_(?:default|handling)\b/i, // handling
		/\b_(?:catch|endcatch)\b/i, // catch
		/\b_throw\b/i, // throw
		/>>/, /\b_return\b/i, // return
		/\b_primitive\b/i, // primitive
		/\b_(?:endtry|try|when)\b/i, // try
		/\b_(?:endprotect|locking|protect|protection)\b/i, // protect
		/\b_(?:endlock|lock)\b/i, // lock
		/\b_with\b/i, // standalone since _finally, _handling, _throw, _try, _leave and _continue all can have this
		/\b_(?:allresults|gather|optional|scatter)\b/i // parameter options
	],

	'builtin': {
		pattern: /\b_(?:clone|package|super|thisthread)\b/i
	},

	'boolean': {
		pattern: /\b_(?:false|maybe|true)\b/i
	},

	'char': {
		pattern: /%(?:[a-zA-Z][a-zA-Z0-9_?!]*|.)/,
		greedy: true
	},

	'symbol': {
		pattern: /(^|[^A-Za-z0-9_]):[A-Za-z0-9_|]+(?:\([^)]*\)|\{[^}]*\}|\[[^\]]*\])?[A-Za-z0-9_|]*/,
		lookbehind: true
	},

	'punctuation': /[[\](){},;]/,

	'unset': {
		pattern: /\b_(?:unset)\b/,
		alias: 'symbol'
	},

	'constant': {
		pattern: /\b_(?:constant)\b/,
		alias: 'symbol'
	},

	'number': {
		pattern: /\b\d+(?:\.\d+)?(?:[eE&][+-]?\d+)?\b|\b(?:[2-9]|[12]\d|3[0-6])[rR][a-zA-Z0-9]+\b/,
		greedy: true
	},

	'string': {
		pattern: /"(?:\\.|[^"\\\r\n])*"|'(?:\\.|[^'\\\r\n])*'/,
		greedy: true
	},

	'global-reference': {
		pattern: /@(?:[a-zA-Z_][a-zA-Z0-9_]*:)?[a-zA-Z_][a-zA-Z0-9_]*/,
		alias: 'symbol'
	},

	'variable': [
		{ pattern: /\|![a-zA-Z0-9_?!]+!\|/ }, // variable encased like |!var!|
		{ pattern: /\|![a-zA-Z0-9_?!]+\|!/ }, // variable encased like |!var|!
		{ pattern: /!\|[a-zA-Z0-9_?!]+\|!/ }, // variable encased like !|var!|
		{ pattern: /!\|\|!/ }, // empty variable !||!
		{ pattern: /![a-zA-Z][a-zA-Z0-9_?!]*!/ }, // variable encased like !var!
		{ pattern: /\b[A-Za-z_]+:[A-Za-z_]+\b/ }, // variable with a prefix like sw:gis_program_manager
		{ pattern: /(^|[^.])\b[a-zA-Z][a-zA-Z_]*\b/, lookbehind: true }
	]
};
