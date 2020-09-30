const INITIAL_STATE = {
  sections: [
    {
      title: 'tops',
      imageUrl: 'https://live.staticflickr.com/65535/50396145692_b1be764463_b.jpg',
      size: 'large',
      id: 1,
      linkUrl: 'shop/tops'
    },
    {
      title: 'jeans',
      imageUrl: 'https://live.staticflickr.com/65535/50395307728_f1ef197743_k.jpg',
      size: 'large',
      id: 2,
      linkUrl: 'shop/jeans'
    },
    {
      title: 'Get 20% off',
      span: 'by',
      size: 'featured',
      id: 3,
      linkUrl: 'signin'
      
    },
    {
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/TLLx8XV/jakets.png',
      size: 'small',
      id: 4,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'shoes',
      imageUrl: 'https://i.ibb.co/0hD8F6v/shoes2-01.png',
      size: 'small',
      id: 5,
      linkUrl: 'shop/shoes'
    },
    {
      title: 'accessories',
      imageUrl: 'https://i.ibb.co/sJ3vd1T/accessories-02.png',
      size: 'small',
      id: 6,
      linkUrl: 'shop/accessories'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;