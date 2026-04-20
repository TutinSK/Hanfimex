import './WhyChooseUs.css'

// TODO: Thay ảnh placeholder bằng ảnh thật
// Đặt ảnh vào thư mục src/assets/icons/why-choose-us/
import qualityImg from '../assets/icons/why-choose-us/premium-quality.png'
import sustainableImg from '../assets/icons/why-choose-us/sustainable-sourcing.png'
import leaderImg from '../assets/icons/why-choose-us/industry-leader.png'
import controlImg from '../assets/icons/why-choose-us/quality-control.png'

function WhyChooseUs() {
  const reasons = [
    {
      img: qualityImg,
      title: 'Premium Quality',
      description: 'High-tech processing maintaining original aroma and flavor'
    },
    {
      img: sustainableImg,
      title: 'Sustainable Sourcing',
      description: 'Commitment to green agricultural products'
    },
    {
      img: leaderImg,
      title: 'Industry Leader',
      description: 'Top manufacturer and exporter since 2003'
    },
    {
      img: controlImg,
      title: 'Quality Control',
      description: 'Rigorous testing and certification processes'
    }
  ]

  return (
    <section className="why-choose-us">
      <div className="why-container">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card">
              <img className="reason-icon-img" src={reason.img} alt={reason.title} />
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
