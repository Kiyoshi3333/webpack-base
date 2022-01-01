import React, { useState, useEffect } from 'react'
type User = {
  name: string
  age: number
  address: string
} | null
export default function User(props: { id: number }) {
  const [user, setUser] = useState<User>(null)

  async function fetchUserData(id: number) {
    const response = await fetch('/' + id)
    setUser(await response.json())
  }

  useEffect(() => {
    fetchUserData(props.id)
  }, [props.id])

  if (!user) {
    return <div>loading...</div>
  }

  return (
    <details>
      <summary>{user.name}</summary>
      <strong>{user.age}</strong> years old
      <br />
      lives in {user.address}
    </details>
  )
}
