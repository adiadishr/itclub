'use client'

import Features from '@/components/features'
import Logo from '@/components/logo'
import TextParallax from '@/components/text-parallax'
import ZoomParallax from '@/components/zoom-parallax/zoom-parallax'
import Lenis from 'lenis'
import React, { useEffect } from 'react'

export default function Home() {

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <>
      <Logo />
      <TextParallax />
      <ZoomParallax />
      <Features />
    </>
  )
}