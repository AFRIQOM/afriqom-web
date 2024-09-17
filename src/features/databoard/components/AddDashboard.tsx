import React from 'react'
import { IoAddCircleOutline } from 'react-icons/io5'

function AddDashboard() {
  const data = [
    {
      name: 'Ghana',
      image: '/assets/ghana.png',
      price: '$ 100'
    },
    {
      name: 'South Africa',
      image: '/assets/southafrica.png',
      price: '$ 150'
    },
    {
      name: 'Morocco',
      image: '/assets/morocco.png',
      price: '$ 100'
    }
  ]
  return (
    <div className="">
      {data.map((item, index) => (
        <div className="flex justify-between items-center  p-2 shadow-sm">
          <div className="flex items-center justify-center gap-2">
            <img src={item.image} alt="" className="h-10 w-110" />
            <span>
              <p className="font-bold m-0 text-content-default">{item.name}</p>
              <span className="text-content-secondary"> Dashboard</span>
            </span>
          </div>
          <div>
            <div className="flex items-center justify-center text-content-default gap-2">
              <span>
                <p className="font-bold m-0">$ 100</p>
                Monthly
              </span>
              <div className=" bg-surface-tertiary w-10 h-10 flex items-center justify-center">
                <IoAddCircleOutline className="text-2xl " />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AddDashboard
