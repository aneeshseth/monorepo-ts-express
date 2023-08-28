"use client"
import React, {useEffect} from 'react'
import axios from 'axios'
axios.defaults.withCredentials = true
async function page() {
  async function fetchUser() {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    }
    const res = await axios.get("http://localhost:3009/verify", {
      headers
    })
  }
  useEffect(() => {
    console.log(localStorage.getItem("token"))
    fetchUser()
  })
  return (
    <>
    <div>todos</div>
    </>
  )
}

export default page