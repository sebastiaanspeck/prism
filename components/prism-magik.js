/* eslint-disable regexp/prefer-w */
Prism.languages.magik = {
	'pragma': {
		pattern: /_pragma.*/,
		alias: 'prolog'
	},

	'declaration': [
		{ pattern: /(?<=_package).*/,	greedy: true },
		{ pattern: /(?<=_global).*/,	greedy: true },
	],

	'comment': [
		{ pattern: /##.*/, greedy: true, alias: 'documentation' }, // documentation
		{ pattern: /#(?!#).*/, greedy: true }, // comments
	],

	'function': [
		{ pattern: /\b_(?:abstract|endmethod|iter|method|private)\b/, greedy: true }, // method keywords
		{ pattern:  /\b_(?:endproc|proc)\b/ }, // procedure 
		{ pattern: /(?<=\.)\s*([A-Za-z_]+)/ } // method calls
	],

	'self': [
		{
			pattern: /(?<=_method )\S+(?=\.)/,
			greedy: true
		},
		{
			pattern: /_self/,
			greedy: true
		}
	],

	'keyword': [
	 	/\b_(?:class|dynamic|global|import|local)\b/, // variables, constant hoort hier niet bij
		/\b_(?:block|endblock)\b/, // block
		/\b_(?:elif|else|endif|if|then)\b/, // if
		/\b_(?:and|andif|or|orif|xor|not)\b/, // logical operators
		/\b_(?:is|isnt)\b/, // comparison
	 	/\b_(?:mod|div)\b/, // math		
		/\b_(?:continue|endloop|finally|for|leave|loop|loopbody|over|while)\b/, // loop
	 	/\b_(?:default|handling)\b/, // handling
	 	/\b_(?:catch|endcatch)\b/, // catch
	 	/\b_throw\b/, // throw
		/>>/, /\b_return\b/, // return
	 	/\b_primitive\b/, // primitive
		/\b_(?:endtry|try|when)\b/, // try
		/\b_(?:endprotect|locking|protect|protection)\b/, // protect
	 	/\b_(?:endlock|lock)\b/, // lock
		/\b_(?:clone|package|super|thisthread)\b/, // builtins with similar highlighting
	 	/\b_with\b/, // standalone since _finally, _handling, _throw, _try, _leave and _continue all can have this
		/\b_(?:optional|gather|scatter|allresults)\b/ // parameter options
	],

	'boolean': {
		pattern: /\b_(?:false|maybe|true)\b/
	},

	'variable': [
		{ pattern: /\|![a-zA-Z0-9_?!]+!\|/}, // variable encased like |!var!|
		{ pattern: /\|![a-zA-Z0-9_?!]+\|!/}, // variable encased like |!var|!
		{ pattern: /!\|[a-zA-Z0-9_?!]+\|!/}, // variable encased like !|var!|
		{ pattern: /!\|\|!/}, // empty variable !||!
		{ pattern: /![a-zA-Z][a-zA-Z0-9_?!]*!/}, // variable encased like !var!
		{ pattern: /(?<![.:])\b[a-zA-Z][a-zA-Z_]*\b/ }, // variables and parameters
		 // dynamic variable
	],

	'operator': [
		/\^<</, /<</, 
		{ pattern: /(?:\*\*\^?|\*\^?|\/\^?|-\^?|\+\^?)<</, greedy: true }, // assignment operators
		/\b_(?:cf|is|isnt)\b/, /<>/, />=/, /<=/, /</, />/, /~=/, /=/, // relational operators
		/\*\*/, /\*/, /\//, // arithmetic operators
		/\+/, /-/, /~/, // unary operators
	],

	'punctuation': /[[\](){},;]/,

	// wat doet dit precies?
	// 'char': {
	// 	pattern: /%(?:[a-zA-Z][a-zA-Z0-9_?!]*|.)/,
	// 	greedy: true
	// },

	// is dit nog nodig?
	// 'variable': [
	// 	/[a-zA-Z_][a-zA-Z0-9_]*:[a-zA-Z_][a-zA-Z0-9_]*/, // global variable
	// 	/@(?:[a-zA-Z_][a-zA-Z0-9_]*:)?[a-zA-Z_][a-zA-Z0-9_]*/, // global reference
	// ],

	'symbol': [
		{ pattern: /:(?:\|[^|]*\||[\w?!])+/, greedy: true},
		{ pattern: /\b_(?:unset)\b/, greedy: true}
	],

	'number': {
		pattern: /\b\d+(?:\.\d+)?(?:[eE&][+-]?\d+)?\b|\b(?:[2-9]|[12]\d|3[0-6])[rR][a-zA-Z0-9]+\b/,
		greedy: true
	},

	'string': {
		pattern: /"(?:\\.|[^"\\\r\n])*"|'(?:\\.|[^'\\\r\n])*'/,
		greedy: true
	}
};
