import Image from 'next/image'
import React from 'react'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
  } from "@/components/ui/card"
  
const CardPage = () => {
  return (
    <Card>
  <CardHeader>
         <div className="w-72 h-72 mb-6 overflow-hidden">
                    <Image
                      className="hover:scale-105 duration-300"
                      src="/shoe-1.png"
                      alt="pic"
                      width={300}
                      height={300}
                    />
                    
                  </div>
    
  </CardHeader>
  <CardContent>
  <div className="flex justify-between items-center px-2 pt-2">
                    <p className="text-base">Nike Air Max Pulse</p>
                    <p className="text-base">₹ 13 995</p>
                  </div>

  </CardContent>
  <CardFooter>
  <div className="text-sm text-gray-700 px-2 ">
                      {`Women's`} Shoes
                    </div>
          
  </CardFooter>
</Card>


    
  )
}

export default CardPage
