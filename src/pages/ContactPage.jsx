import { useState } from 'react'
import './ContactPage.css'

function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSending, setIsSending] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus({ type: '', message: '' })
    setIsSending(true)

    const payload = {
      ...form,
      createdAt: new Date().toISOString(),
    }

    try {
      const response = await fetch('http://localhost:3003/api/hanfimex-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error('Request failed')
      }

      setStatus({ type: 'success', message: 'Đã gửi thông tin thành công.' })
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch {
      setStatus({ type: 'error', message: 'Không thể gửi thông tin. Vui lòng thử lại.' })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section className="contact-page">
      <div className="contact-page-container">
        <h2 className="section-title">Contact Us</h2>
        <p className="contact-page-description">
          Get in touch with us through our social channels or contact info below.
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Họ và tên</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Nhập họ tên"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="email@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Số điện thoại</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="+84 123 456 789"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Nội dung</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Nội dung cần tư vấn"
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="form-submit" disabled={isSending}>
              {isSending ? 'Đang gửi...' : 'Gửi thông tin'}
            </button>
            {status.message && (
              <p className={`form-status ${status.type}`}>{status.message}</p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactPage
