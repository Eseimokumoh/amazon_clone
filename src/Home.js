import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            <img className='home_image' src='https://cdn.imza.com/indirv2/img/3-1600386834.jpg' 
            alt=''/>
      
        <div className='home_row'>
          <Product 
            id='12321341'
            title='The lean startup'
            price={29.99}
            image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFpuJM-kE2zHBGGJN4Y3qectA6o21ukYSxEqewfsQP&s'
            rating={5}
          />
          <Product
            id='49538094'
            title='Kenwood kMix Stand Mixer for Baking,
            stylish Kitchen Mixer with K-beater, Dough Hook 
            and Whisk, 5 litre Glass Bowl'
            price={239.0}
            image='https://www.costco.co.uk/medias/sys_master/images/h5d/hd2/31246443118622.jpg'
            rating={4}
          />
        </div>

        <div className='home_row'>
          <Product
            id='4903850'
            title="Samsung watch 4"
            price={199.99}
            image='https://ratrading.co/wp-content/uploads/2023/07/Samsung-Galaxy-Watch-4-44mm-silver-color.jpg'
            rating={3}
          />
          <Product
            id='23445930'
            title='Amazon Echo (3rd generation) | Smart speaker with Alexa Charcoal Fabric'
            price={98.99}
            image='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6347/6347261_sd.jpg'
            rating={5}
          />
          <Product
            id='3254354345'
            title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)'
            price={598.99}
            image='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-ipad-pro-12-wifi-silver-2020?wid=1150&hei=1150&fmt=jpeg&qlt=95&.v=1626721066000'
            rating={4}
          />
        </div>

        <div className='home_row'>
          <Product
            id='90829332'
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor
             - Super Ultra wide Dual WQHD 5120 x 1440"
            price={1094.98}
            image='https://m.media-amazon.com/images/I/81rus0UFhsL._AC_UF1000,1000_QL80_.jpg'
            rating={3}
          />
        </div>
        </div>
    </div>
  )
}

export default Home;