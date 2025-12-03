/* eslint-disable regexp/prefer-w */
Prism.languages['magik-product'] = {
  product_name: {
    // Match only the name, NOT the product type / number
    pattern: /^[A-Za-z_]\w*(?=\s+(?:\d+|config_product|customisation_product|layered_product))/m,
    inside: {
      product_type: {
        pattern: /(config_product|customisation_product|layered_product)/i
      }
    }
  },

  keyword: [
    /^\s*(?:description|end|title|version)\s*$/im,
    /^\s*(?:requires)\s*$/im,
    /^\s*(?:do_not_translate)\s*$/im
  ]
};