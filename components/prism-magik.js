/* eslint-disable regexp/prefer-w */
Prism.languages.magik = {
	'comment': [
		{ pattern: /##.*/, greedy: true }, // documentation
		{ pattern: /#.*/, greedy: true } // comment
	],

	'keyword': [
		/\b_(?:class|constant|dynamic|global|import|local)\b/, // variables,
		/\b_(?:abstract|endmethod|iter|method|private)\b/, // method
		/\b_(?:endproc|proc)\b/, // procedure
		/\b_(?:block|endblock)\b/, // block
		/\b_(?:elif|else|endif|if|then)\b/, // if
		/\b_(?:continue|endloop|finally|for|leave|loop|loopbody|over|while)\b/, // loop
		/\b_(?:default|handling)\b/, // handling
		/\b_(?:catch|endcatch)\b/, // catch
		/\b_throw\b/, // throw
		/\b_primitive\b/, // primitive
		/\b_(?:endtry|try|when)\b/, // try
		/\b_(?:endprotect|locking|protect|protection)\b/, // protect
		/\b_(?:endlock|lock)\b/, // lock
		/\b_with\b/ // standalone since _finally, _handling, _throw, _try, _leave and _continue all can have this
	],

	'builtin': [
		/\b_(?:clone|package|self|super|thisthread|unset)\b/
	],

	'boolean': {
		pattern: /\b_(?:false|maybe|true)\b/,
		alias: 'boolean'
	},

	'char': {
		pattern: /%(?:[a-zA-Z][a-zA-Z0-9_?!]*|.)/,
		greedy: true
	},

	'variable': [
		/\|![a-zA-Z0-9_?!]+!\|/, /\|![a-zA-Z0-9_?!]+\|!/, /!\|[a-zA-Z0-9_?!]+\|!/, /!\|\|!/, /![a-zA-Z][a-zA-Z0-9_?!]*!/, // dynamic variable
		/[a-zA-Z_][a-zA-Z0-9_]*:[a-zA-Z_][a-zA-Z0-9_]*/, // global variable
		/@(?:[a-zA-Z_][a-zA-Z0-9_]*:)?[a-zA-Z_][a-zA-Z0-9_]*/, // global reference
	],

	'symbol': {
		pattern: /:(?:\|[^|]*\||[\w?!])+/,
		alias: 'symbol'
	},

	'number': {
		pattern: /\b\d+(?:\.\d+)?(?:[eE&][+-]?\d+)?\b|\b(?:[2-9]|[12]\d|3[0-6])[rR][a-zA-Z0-9]+\b/,
		greedy: true,
		alias: 'number'
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
		/\^<</, /<</, { pattern: /_(?:and|andif|or|orif|xor)<</, greedy: true }, { pattern: /(?:\*\*\^?|\*\^?|\/\^?|_mod\^?|_div\^?|-\^?|\+\^?)<</, greedy: true }, // assignment operators
		/>>/, /\b_return\b/, // return operators
		/\b_(?:cf|is|isnt)\b/, /<>/, />=/, /<=/, /</, />/, /~=/, /=/, // relational operators
		/\b_(?:and|andif|or|orif|xor)\b/, // logical operators
		/\*\*/, /\*/, /\//, /\b_(?:div|mod)\b/, // arithmetic operators
		/\+/, /-/, /\b_not\b/, /~/, // unary operators
	],

	'property': {
		pattern: /_pragma.*/,
		greedy: true,
		inside: {
			'modifier': /classify_level|topic|usage/,
			'punctuation': /[={},]/
		}
	},

	'punctuation': /[[\](){},;]/,

	'method-call': {
		pattern: /\b([a-zA-Z_]\w*)(\.)[a-zA-Z_]\w*[!?]?(?:\s*\([^()]*\))?/,
		lookbehind: false,
		greedy: true,
		inside: {
			'class-name': {
				pattern: /^[a-zA-Z_]\w*/,
				alias: 'class-name'
			},
			'dot': {
				pattern: /\./
			},
        'function': {
            pattern: /[a-zA-Z_]\w*[!?]?(?:\s*\([^()]*\))?/,
            alias: 'function',
            inside: {
                'function': {
                    pattern: /^[a-zA-Z_]\w*[!?]?/,
                    alias: 'function'
                },
                'parameters': {
                    pattern: /\([^()]*\)/,
                    alias: 'symbol',
                    inside: {
                        'punctuation': /[(),]/,
                        'parameter': {
                            pattern: /[^(),\s]+/,
                            alias: 'variable'
                        }
                    }
                }
            }
        }
		}
  	}
};
