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

	'declaration': [
		{ pattern: /(_package).*/, greedy: true, lookbehind: true },
		{ pattern: /(\b_global\s+)[^;]+/, greedy: true, lookbehind: true },
		{ pattern: /(\b_constant\s+)[^<<]+/, greedy: true, lookbehind: true }
	],

	'comment': [
		{ pattern: /##.*/, greedy: true, alias: 'documentation' }, // documentation
		{ pattern: /#(?!#).*/, greedy: true }, // comments
	],

	'function': [
		{ pattern: /\b_(?:abstract|endmethod|iter|method|private)\b/, greedy: true }, // method keywords
		{ pattern: /\b_(?:endproc|proc)\b/ }, // procedure 
		{ pattern: /(\.)\s*([A-Za-z_]+)/, lookbehind: true } // method calls
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

	'keyword': [
	 	/\b_(?:class|dynamic|global|import|local)\b/i, // variables
		/\b_(?:block|endblock)\b/i, // block
		/\b_(?:elif|else|endif|if|then)\b/i, // if
		/\b_(?:and|andif|or|orif|xor|not)\b/i, // logical operators
		/\b_(?:is|isnt)\b/i, // comparison
	 	/\b_(?:mod|div)\b/i, // math		
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
		/\b_(?:optional|gather|scatter|allresults)\b/i // parameter options}
	],

	'builtins': {
		pattern: /\b_(?:clone|package|super|thisthread)\b/i,
		alias: 'keyword'
	},

	'boolean': {
		pattern: /\b_(?:false|maybe|true)\b/i
	},

	'operator': [
		/\^<</, /<</, 
		{ pattern: /(?:\*\*\^?|\*\^?|\/\^?|-\^?|\+\^?)<</, greedy: true }, // assignment operators
		/\b_(?:cf|is|isnt)\b/, /<>/, />=/, /<=/, /</, />/, /~=/, /=/, // relational operators
		/\*\*/, /\*/, /\//, // arithmetic operators
		/\+/, /-/, /~/, // unary operators
	],

	'punctuation': /[[\](){},;]/,

	'char': {
		pattern: /%(?:[a-zA-Z][a-zA-Z0-9_?!]*|.)/,
		greedy: true
	},

	// is dit nog nodig?
	// 'variable': [
	// 	/[a-zA-Z_][a-zA-Z0-9_]*:[a-zA-Z_][a-zA-Z0-9_]*/, // global variable
	// 	/@(?:[a-zA-Z_][a-zA-Z0-9_]*:)?[a-zA-Z_][a-zA-Z0-9_]*/, // global reference toevoegen
	// ],

	'symbol': {
		 pattern: /:(?:\|[^|]*\||[\w?!])+/, 
		 greedy: true
	},

	'unset': {
		pattern: /\b_(?:unset)\b/,
		alias: 'symbol'
	},

	'constant': {
		pattern: /\b_(?:constant)\b/,
		alias: 'symbol'
	},

	'regex': {
		pattern: /\/(?:(?!\/)(?:\\.|[^\\\/\r\n])*\/[qisdlmuCX]*|\/)/,
		greedy: true
	},

	'number': {
		pattern: /\b\d+(?:\.\d+)?(?:[eE&][+-]?\d+)?\b|\b(?:[2-9]|[12]\d|3[0-6])[rR][a-zA-Z0-9]+\b/,
		greedy: true
	},

	'string': {
		pattern: /"(?:\\.|[^"\\\r\n])*"|'(?:\\.|[^'\\\r\n])*'/,
		greedy: true
	},

	'variable': [
		{ pattern: /\|![a-zA-Z0-9_?!]+!\|/}, // variable encased like |!var!|
		{ pattern: /\|![a-zA-Z0-9_?!]+\|!/}, // variable encased like |!var|!
		{ pattern: /!\|[a-zA-Z0-9_?!]+\|!/}, // variable encased like !|var!|
		{ pattern: /!\|\|!/}, // empty variable !||!
		{ pattern: /![a-zA-Z][a-zA-Z0-9_?!]*!/}, // variable encased like !var!
		{ pattern: /(?<![.:])\b[a-zA-Z][a-zA-Z_]*\b/ }, // variables and parameters
	],
};
