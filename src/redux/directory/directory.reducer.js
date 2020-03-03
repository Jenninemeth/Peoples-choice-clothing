const INITIAL_STATE = {
  sections: [
    {
      title: 'tops',
      imageUrl: 'https://www.lulus.com/images/product/xlarge/3078440_485812.jpg?w=560',
      size: 'large',
      id: 1,
      linkUrl: 'shop/tops'
    },
    {
      title: 'jackets',
      imageUrl: 'https://i.pinimg.com/564x/7d/c4/03/7dc40359cd52efd243173296d86f4595.jpg',
      size: 'large',
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'jeans',
      imageUrl: 'https://i.ibb.co/2cqSXX0/jeans-cover-01-01.jpg',
      size: 'featured',
      id: 3,
      linkUrl: 'shop/jeans'
      
    },
    {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/4YJtp2L/hats-cover-02.jpg',
      id: 4,
      linkUrl: 'shop/hats'
    },
    {
      title: 'accessories',
      imageUrl: 'https://i.pinimg.com/564x/21/6b/71/216b7158b9df64f6ef437de8a77d7faa.jpg',
      id: 5,
      linkUrl: 'shop/accessories'
    },
    {
      title: 'shoes',
      imageUrl: 'https://i.pinimg.com/564x/14/94/a7/1494a7f23f08401847666666090dd2d7.jpg',
      id: 6,
      linkUrl: 'shop/shoes'
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