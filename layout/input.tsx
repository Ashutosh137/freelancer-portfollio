"use client"
import { PlaceholdersAndVanishInput } from '@/components/input'
import React from 'react'

function Input() {
  return (
    <section className="my-20 mx-auto">
        <h1 className="text-6xl font-bold text-center my-10 capitalize">
          connect us
        </h1>
        <div className="flex justify-center mx-10">

          <PlaceholdersAndVanishInput onChange={() => { }} onSubmit={() => { }} placeholders={["Enter your email address"]} />
        </div>
      </section>
  )
}

export default Input