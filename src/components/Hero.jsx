import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-video">
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Company Introduction Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Tập đoàn Hanfimex</h1>
          <p className="hero-description">
            Từ năm 2003, Tập đoàn Hanfimex luôn tập trung vào sứ mệnh "Vì một chuỗi cung ứng thực phẩm lành mạnh". Chúng tôi là nhà sản xuất, xuất khẩu hàng đầu các loại thực phẩm và gia vị tại Việt Nam như hạt điều, tiêu đen, tiêu trắng, quế, cà phê Robusta, dừa khô...
          </p>
          <button className="hero-btn">ĐỌC THÊM</button>
        </div>
      </div>
    </section>
  )
}

export default Hero
