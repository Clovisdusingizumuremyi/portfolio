import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { emailjsConfig, isEmailjsConfigured } from '../config/emailjs'
import { profile } from '../data/profile'

const emptyForm = { name: '', email: '', subject: '', message: '', website: '' }

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Returns an object like { email: 'Please enter a valid email address' }; empty object = valid
function validate(values) {
  const errors = {}
  if (values.name.trim().length < 2) errors.name = 'Please enter your name'
  if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'Please enter a valid email address'
  if (values.subject.trim().length < 3) errors.subject = 'Please add a short subject'
  if (values.message.trim().length < 10) errors.message = 'Your message should be at least 10 characters'
  return errors
}

/**
 * All the contact form logic: values, validation and sending.
 * status: 'idle' | 'sending' | 'success' | 'error'
 */
export function useContactForm() {
  const [values, setValues] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    // Clear a field's error as soon as the user starts fixing it
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault() // stop the browser from reloading the page

    // "website" is a hidden field humans never see. If it's filled in, a spam bot did it.
    if (values.website) return

    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length > 0) return

    // EmailJS not set up yet: open the visitor's email app with everything pre-filled
    if (!isEmailjsConfigured) {
      const body = `${values.message}\n\n— ${values.name} (${values.email})`
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
        values.subject,
      )}&body=${encodeURIComponent(body)}`
      return
    }

    setStatus('sending')
    try {
      // These names must match the {{variables}} in your EmailJS template
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: values.name,
          reply_to: values.email,
          subject: values.subject,
          message: values.message,
        },
        { publicKey: emailjsConfig.publicKey },
      )
      setStatus('success')
      setValues(emptyForm)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  return { values, errors, status, setStatus, handleChange, handleSubmit }
}
