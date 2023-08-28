"use client"
import React, {useState} from 'react'
import {Signup} from 'ui'
import axios from 'axios'
import { useRouter } from 'next/navigation'
function page() {
  const router = useRouter()
  async function userSignup(username: string, password: string) {
    try {
        await axios.post("http://localhost:3009/signup", {
            username: username,
            password: password
        })
        router.push("/landing")
    } catch(err) {
        console.log(err)
    }
  }
  return (
    <div>
       <Signup onClick={(username: string, password: string) => userSignup(username, password)}/>
    </div>
  )
}

export default page