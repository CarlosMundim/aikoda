'use client'
import React from 'react'
import { SAPLayout } from '@/components/SAP'
import ClientRegistration from '@/components/SAP/ClientRegistration'

export default function ClientRegistrationPage() {
  return (
    <SAPLayout
      title="Client Registration"
      subtitle="Enterprise Client Onboarding System"
      showLanguageToggle={true}
    >
      <ClientRegistration />
    </SAPLayout>
  )
}

