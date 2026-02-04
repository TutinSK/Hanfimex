import './Concept.css'

function Concept() {
  return (
    <section className="concept" id="about">
      <div className="concept-container">
        <h2 className="section-title">Our 6F Concept</h2>
        <div className="concept-content">
          <div className="concept-item">
            <div className="concept-icon">🌱</div>
            <h3>Fresh Farm</h3>
            <p>Sourced from the finest farms with sustainable practices</p>
          </div>
          <div className="concept-item">
            <div className="concept-icon">⚖️</div>
            <h3>Fair Factory</h3>
            <p>Ethical manufacturing processes ensuring quality and fairness</p>
          </div>
          <div className="concept-item">
            <div className="concept-icon">🍽️</div>
            <h3>Fine Food</h3>
            <p>Premium quality products for healthy living</p>
          </div>
        </div>
        <p className="concept-description">
          Our success is built on creating value from green agricultural products
          with a commitment to maintaining original aroma, flavor, and quality.
        </p>
      </div>
    </section>
  )
}

export default Concept
