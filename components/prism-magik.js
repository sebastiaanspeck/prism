/* eslint-disable regexp/prefer-w */
Prism.languages.magik = {
	'comment': [
		{ pattern: /##.*/, greedy: true }, // documentation
		{ pattern: /#.*/, greedy: true } // comment
	],

	'keyword': [
		/\b_(?:class|constant|dynamic|global|import|local)\b/i, // variables,
		/\b_(?:abstract|endmethod|iter|method|private)\b/i, // method
		/\b_(?:endproc|proc)\b/i, // procedure
		/\b_(?:block|endblock)\b/i, // block
		/\b_(?:elif|else|endif|if|then)\b/i, // if
		/\b_(?:continue|endloop|finally|for|leave|loop|loopbody|over|while)\b/i, // loop
		/\b_(?:default|handling)\b/i, // handling
		/\b_(?:catch|endcatch)\b/i, // catch
		/\b_throw\b/i, // throw
		/\b_primitive\b/i, // primitive
		/\b_(?:endtry|try|when)\b/i, // try
		/\b_(?:endprotect|locking|protect|protection)\b/i, // protect
		/\b_(?:endlock|lock)\b/i, // lock
		/\b_with\b/i // standalone since _finally, _handling, _throw, _try, _leave and _continue all can have this
	],

	'builtin': [
		/\b_(?:clone|package|self|super|thisthread|unset)\b/i
	],

	'boolean': /\b_(?:false|maybe|true)\b/i,

	'char': {
		pattern: /%(?:[a-zA-Z][a-zA-Z0-9_?!]*|.)/,
		greedy: true
	},

	'variable': [
		/\|![a-zA-Z0-9_?!]+!\|/, /\|![a-zA-Z0-9_?!]+\|!/, /!\|[a-zA-Z0-9_?!]+\|!/, /!\|\|!/, /![a-zA-Z][a-zA-Z0-9_?!]*!/, // dynamic variable
		/[a-zA-Z_][a-zA-Z0-9_]*:[a-zA-Z_][a-zA-Z0-9_]*/, // global variable
		/@(?:[a-zA-Z_][a-zA-Z0-9_]*:)?[a-zA-Z_][a-zA-Z0-9_]*/, // global reference
	],

	'symbol': /:(?:\|[^|]*\||[\w?!])+/,

	'number': {
		pattern: /\b\d+(?:\.\d+)?(?:[eE&][+-]?\d+)?\b|\b(?:[2-9]|[12]\d|3[0-6])[rR][a-zA-Z0-9]+\b/,
		greedy: true
	},

	'string': {
		pattern: /"(?:\\.|[^"\\\r\n])*"|'(?:\\.|[^'\\\r\n])*'/,
		greedy: true
	},

	'regex': {
		pattern: /\/(?:(?!\/)(?:\\.|[^\\\/\r\n])*\/[qisdlmuCX]*|\/)/,
		greedy: true
	},

	'operator': [
		/\^<</, /<</, { pattern: /_(?:and|andif|or|orif|xor)<</i, greedy: true }, { pattern: /(?:\*\*\^?|\*\^?|\/\^?|_mod\^?|_div\^?|-\^?|\+\^?)<</, greedy: true }, // assignment operators
		/>>/, /\b_return\b/i, // return operators
		/\b_(?:cf|is|isnt)\b/i, /<>/, />=/, /<=/, /</, />/, /~=/, /=/, // relational operators
		/\b_(?:and|andif|or|orif|xor)\b/i, // logical operators
		/\*\*/, /\*/, /\//, /\b_(?:div|mod)\b/i, // arithmetic operators
		/\+/, /-/, /\b_not\b/i, /~/, // unary operators
	],

	'property': {
		pattern: /_pragma.*/,
		greedy: true,
		inside: {
			'modifier': /classify_level|topic|usage/,
			'punctuation': /[={},]/
		}
	},

	'punctuation': /[[\](){},;]/
};
