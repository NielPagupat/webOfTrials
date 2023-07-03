import React from 'react'
import ResponsiveAppBar from '../Components/NavBar'
import Album from './AboutPage'
import SignInSide from './LoginPage'
import LandingPageRouter from '../Router/LandingPageRouter'
export default function LandingPage() {
  return (
    <>
    <ResponsiveAppBar />
    <LandingPageRouter />
    </>
  )
}
