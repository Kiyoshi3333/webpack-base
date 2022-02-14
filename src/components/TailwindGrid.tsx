import { APICall } from './APICall'
import React, { useEffect, useState } from 'react'

const TailwindGrid = () => {
  const [members, setMembers] = useState<Member[]>([])
  useEffect(() => {
    const fetchData = async () => {
      const data = await APICall()
      setMembers(data)
    }
    fetchData()
  }, [])

  return (
    <>
      <div className="grid grid-cols-3 gap-4 mt-3 justify-items-center place-content-center">
        <div className="">
          <img
            className="ts-preview-img"
            width={485}
            height={334}
            src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?&cs=tinysrgb&dpr=3&h=1500&w=2520"
          />
        </div>
        <div className="flex-shrink">b</div>
        <div className="flex-auto">c</div>
        <div className="flex-auto">d</div>
        <div className="">e</div>
        <div className="">f</div>
      </div>
      <div className="grid gap-2 grid-cols-3 p-2 hidden">
        {members.map((member) => (
          <div
            key={member.id}
            style={{ height: '100px' }}
            className="h-4 bg-teal-400"
          >
            {member.id} {member.name}
          </div>
        ))}
      </div>

      <p>レスポンシブ</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 mt-3">
        <div style={{ height: '100px' }} className="h-4 bg-teal-400">
          <div></div>
        </div>
        <div style={{ height: '100px' }} className="h-4 bg-teal-400"></div>
        <div style={{ height: '100px' }} className="h-4 bg-teal-400"></div>
        <div style={{ height: '100px' }} className="h-4 bg-teal-400"></div>
        <div style={{ height: '100px' }} className="h-4 bg-teal-400"></div>
        <div style={{ height: '100px' }} className="h-4 bg-teal-400"></div>
      </div>
      <p>auto-fit</p>

      <div
        className="grid gap-1 mt-3"
        style={{
          height: '500px',
          gridTemplateColumns: 'repeat(auto-fit,minmax(400px,1fr))',
        }}
      >
        <div className="h-100 bg-teal-400"></div>
        <div className="h-100 bg-teal-400"></div>
        <div className="h-100 bg-teal-400"></div>
        <div className="h-100 bg-teal-400"></div>
        <div className="h-100 bg-teal-400"></div>
        <div className="h-100 bg-teal-400"></div>
      </div>
      <div
        className="grid place-items-center w-full"
        style={{ height: '500px' }}
      >
        <div className="h-100 bg-teal-400 p-5">Place items center</div>
      </div>
    </>
  )
}

export default TailwindGrid
