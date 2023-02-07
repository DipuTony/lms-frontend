import React from 'react'
import { useNavigate } from 'react-router-dom';
import AuthIndex from '../../Components/Auth/AuthIndex';

function LandingPageIndex() {
  const navigate = useNavigate()

  const { isLogedIn } = AuthIndex();



  return (
    <>
      Home Page
    </>
  )
}

export default LandingPageIndex