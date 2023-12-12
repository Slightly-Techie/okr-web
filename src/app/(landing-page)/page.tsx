import Companies from '@/components/landing-page/Companies'
import Features from '@/components/landing-page/Features'
import Header from '@/components/landing-page/Header'
import OpenSource from '@/components/landing-page/OpenSource'
import React from 'react'

function page() {
  return (
    <section>
      <Header/>
      <Companies/>
      <Features/>
      <OpenSource/>
    </section>
  )
}

export default page