import { doctors } from '@/app/assets/assets_frontend/assets'
import Image from 'next/image'
import React from 'react'
import DoctorCard from '../cards/DoctorCard'
import Link from 'next/link'
import DoctorsListing from './DoctorsListing'

const TopDoctors = () => {
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
       <h1 className='text-3xl font-medium'>TOP Doctors to Book</h1>
        <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>
        <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>

        <DoctorsListing doctors={doctors.slice(0,10)} />
        </div>
        <Link href={"/doctors"} className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10'>more</Link>
    </div>
  )
}

export default TopDoctors