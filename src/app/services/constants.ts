export const constants = {
    siteURL:'https://groceries.simplystart.in',
    sitePath: '/wp-json/wp/v2/',
    woocomPath: '/wp-json/wc/v3/',
    jwtPath : '/wp-json/jwt-auth/v1/token/',
    apiKey:'S9-@Ko~0oO}4(w$UhK(cv[%k*Lho&-I4rFzV*M=?K>M+G_CWZN!S!?_K#2YYE:]>',
    consumerKey: 'ck_f5c1da6d80dc2caec1fcc040b3924ada90497ef9',
    consumerSecret: 'cs_b1d3ce28bb9523c07b683b9da0664bcb74d1a350',
};

export const consumer_keys_path = 'consumer_key=' + constants.consumerKey + '&consumer_secret=' + constants.consumerSecret;

export const API_PATH = {
    REGISTER_CUSTOMER : constants.siteURL + constants.woocomPath + 'customers',
    LOGIN_CUSTOMER : constants.siteURL + constants.jwtPath,
    CUSTOMER_DATA : constants.siteURL + constants.woocomPath + 'customers',
    MY_DATA : constants.siteURL + constants.sitePath + 'users',
    PRODUCTS : constants.siteURL + constants.woocomPath + 'products',
    CATEGORIES : constants.siteURL + constants.woocomPath + 'products/categories',
    TAGS : constants.siteURL + constants.woocomPath + 'products/tags',
    POST : constants.siteURL + constants.sitePath + 'posts',
    PAYMENT_GATEWAY : constants.siteURL + constants.woocomPath + 'payment_gateways',
    ORDERS : constants.siteURL + constants.woocomPath + 'orders',
};

export const REGEX = {
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
}

export const MENU = [
    {
      title: 'Home',
      url: '/home',
      callback: '',
      icon: 'home'
    },
    {
      title: 'Products',
      url: '/products',
      callback: '',
      icon: 'storefront'
    },
    {
      title: 'Categories',
      url: '/categories',
      callback: '',
      icon: 'albums'
    },
    {
      title: 'Tags',
      url: '/tags',
      callback: '',
      icon: 'bookmark'
    },
    {
      title: 'Cart',
      url: '/cart',
      callback: '',
      icon: 'cart'
    },
    {
      title: 'Checkout',
      url: '/checkout',
      callback: '',
      icon: 'wallet'
    }
  ];
