'use client'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'

const BannerComp = () => {

  return (
    <section id='home-banner'>
      <div className="container">
        <div className="banner-wrapper">
            <div className="banner-content">
                <h2>This is banner</h2>
                <Input  />
            </div>
        </div>
      </div>
    </section>
  )
}

export default BannerComp
