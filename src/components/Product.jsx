import React from 'react'
import { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const Product = () => {  
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default Product