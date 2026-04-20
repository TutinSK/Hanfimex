import './Products.css'

// TODO: Thay ảnh placeholder bằng ảnh thật
// Đặt ảnh vào thư mục src/assets/icons/products/
import cashewImg from '../assets/icons/products/cashew-nuts.png'
import blackPepperImg from '../assets/icons/products/black-pepper.png'
import whitePepperImg from '../assets/icons/products/white-pepper.png'
import cinnamonImg from '../assets/icons/products/cinnamon.png'
import coffeeImg from '../assets/icons/products/robusta-coffee.png'
//import coconutImg from '../assets/icons/products/desiccated-coconuts.png'

function Products() {
  const products = [
    { name: 'Cashew Nuts', img: cashewImg },
    { name: 'Black Pepper', img: blackPepperImg },
    { name: 'White Pepper', img: whitePepperImg },
    { name: 'Cinnamon', img: cinnamonImg },
    { name: 'Robusta Coffee', img: coffeeImg },
    // { name: 'Desiccated Coconuts', img: coconutImg },
  ]

  return (
    <section className="products" id="products">
      <div className="products-container">
        <h2 className="section-title">Our Main Products</h2>
        <p className="products-subtitle">
          "By choosing carefully fresh and fine material and employing a high-tech
          process, all finished products maintain the original aroma, flavor and
          quality as a gift from nature."
        </p>
        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <img className="product-img" src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
