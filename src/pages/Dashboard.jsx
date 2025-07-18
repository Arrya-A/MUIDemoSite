import { Button, Typography } from '@mui/material'
import React from 'react'

const Dashboard = () => {
  const handleSignOut=()=>{
    localStorage.removeItem("accessToken")
  }
  return (
    <>
      <Typography variant='h4'>dashboard</Typography>
      <Button onClick={handleSignOut} >Signout</Button>
    </>
  )
}

export default Dashboard