import { useState } from 'react'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Button from '../components/ui/Button'
import Icon from '../components/common/Icon'
import { useTranslation } from '../hooks/useTranslation'

const INITIAL_FORM = { name: '', email: '', message: '' }

const Contact = () => {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const t = useTranslation()

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `New message from ${form.name} — NexBridge`,
          to: 'duego17@gmail.com',
        }),
      })

      const data = await res.json()

      if (data.success) {
        setStatus('success')
        setForm(INITIAL_FORM)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <Section id="contact" subtitle={t.contact.subtitle} title={t.contact.title}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-6">
            <p className="leading-relaxed" style={{ color: 'var(--color-text)', opacity: 0.6 }}>
              {t.contact.description}
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon name="mail" className="text-primary" size={20} />
                </div>
                <span style={{ color: 'var(--color-text)', opacity: 0.7 }}>contact@nexbridge.cloud</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text)', opacity: 0.8 }}>
                {t.contact.label_name}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                disabled={status === 'loading'}
                className="w-full bg-surface border border-border rounded-lg px-4 py-3 placeholder-gray-500 focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                style={{ color: 'var(--color-text)' }}
                placeholder={t.contact.placeholder_name}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text)', opacity: 0.8 }}>
                {t.contact.label_email}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                disabled={status === 'loading'}
                className="w-full bg-surface border border-border rounded-lg px-4 py-3 placeholder-gray-500 focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                style={{ color: 'var(--color-text)' }}
                placeholder={t.contact.placeholder_email}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text)', opacity: 0.8 }}>
                {t.contact.label_message}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                disabled={status === 'loading'}
                className="w-full bg-surface border border-border rounded-lg px-4 py-3 placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none disabled:opacity-50"
                style={{ color: 'var(--color-text)' }}
                placeholder={t.contact.placeholder_message}
              />
            </div>

            {status === 'success' && (
              <div className="flex items-center gap-3 text-sm text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-lg px-4 py-3">
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {t.contact.success}
              </div>
            )}

            {status === 'error' && (
              <div className="flex items-center gap-3 text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3">
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                {t.contact.error}
              </div>
            )}

            <Button
              type="submit"
              className="w-full sm:w-auto"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? t.contact.sending : t.contact.submit}
            </Button>
          </form>
        </div>
      </Container>
    </Section>
  )
}

export default Contact
