"use client"
import React, {useState} from 'react'

export function Login(props: {
    onClick: (username: string, password: string) => void}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
  return (
    <div>
        <input placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)}></input>
        <input placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
        <button onClick={async() => {
                props.onClick(username, password);
        }}>Login</button>
    </div>
  )
}
