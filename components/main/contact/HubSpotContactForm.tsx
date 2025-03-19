// components/main/contact/HubSpotContactForm.tsx
'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    hbspt: any
  }
}

const HubSpotContactForm = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = '//js.hsforms.net/forms/embed/v2.js'
    script.async = true
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '46888166',
          formId: '3e731007-c1e4-47e2-9eb4-bb592991cf7e',
          target: '#hubspotForm',
        })
      }
    }
    document.body.appendChild(script)

    // クリーンアップ処理
    return () => {
      document.body.removeChild(script)
      const formContainer = document.getElementById('hubspotForm')
      if (formContainer) {
        formContainer.innerHTML = ''
      }
    }
  }, [])

  return (
    <div
      id="hubspotForm"
      className="my-8 p-4 border border-gray-300 rounded-lg shadow-lg"
    ></div>
  )
}

export default HubSpotContactForm
