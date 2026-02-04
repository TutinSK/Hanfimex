import './Products.css'

function Products() {
  const products = [
    { name: 'Cashew Nuts', emoji: '🥜' },
    { name: 'Black Pepper', emoji: '⚫' },
    { name: 'White Pepper', emoji: '⚪' },
    { name: 'Cinnamon', emoji: '🌿' },
    { name: 'Robusta Coffee', emoji: '☕' },
    { name: 'Desiccated Coconuts', emoji: '🥥' }
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
              <div className="product-emoji">{product.emoji}</div>
              <h3>{product.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
