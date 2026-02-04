import './WhyChooseUs.css'

function WhyChooseUs() {
  const reasons = [
    {
      icon: '✓',
      title: 'Premium Quality',
      description: 'High-tech processing maintaining original aroma and flavor'
    },
    {
      icon: '🌍',
      title: 'Sustainable Sourcing',
      description: 'Commitment to green agricultural products'
    },
    {
      icon: '🏆',
      title: 'Industry Leader',
      description: 'Top manufacturer and exporter since 2003'
    },
    {
      icon: '🔬',
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
              <div className="reason-icon">{reason.icon}</div>
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
