import React from 'react'
import { useNavigate } from 'react-router'

export default function About() {
  const nav = useNavigate();

  return (
    <div onClick={() => nav(-1)}>About</div>
  )
}
