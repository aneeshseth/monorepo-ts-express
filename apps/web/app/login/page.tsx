"use client"
import React, { useState } from 'react'
import {Login} from 'ui'
import axios from 'axios'
import { useRouter } from 'next/navigation'

function page() {
  const router = useRouter()
  async function userLogin(username: string, password: string) {
    try {
        const res = await axios.post("http://localhost:3009/login", {
            username: username,
            password: password
        })
        const data = await res.data;
        localStorage.setItem("token", data.token)
        router.push("/landing")
    } catch(err) {
        router.push("/")
        console.log(err)
    }
  }
  return (
    <div>
       <Login onClick={(username: string, password: string) => userLogin(username, password)}/>
    </div>
  )
}

export default page