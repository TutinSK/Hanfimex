import './Concept.css'

// TODO: Thay ảnh placeholder bằng ảnh thật
// Đặt ảnh vào thư mục src/assets/icons/concept/
import freshFarmImg from '../assets/icons/concept/fresh-farm.png'
import fairFactoryImg from '../assets/icons/concept/fair-factory.png'
import fineFoodImg from '../assets/icons/concept/fine-food.png'

function Concept() {
  const concepts = [
    { img: freshFarmImg, title: 'Fresh Farm', desc: 'Sourced from the finest farms with sustainable practices' },
    { img: fairFactoryImg, title: 'Fair Factory', desc: 'Ethical manufacturing processes ensuring quality and fairness' },
    { img: fineFoodImg, title: 'Fine Food', desc: 'Premium quality products for healthy living' },
  ]

  return (
    <section className="concept" id="about">
      <div className="concept-container">
        <h2 className="section-title">Our 6F Concept</h2>
        <div className="concept-content">
          {concepts.map((item, i) => (
            <div className="concept-item" key={i}>
              <img className="concept-icon-img" src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
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
