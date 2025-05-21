import React from 'react'

const Glimpse = () => {
    return (
        <div className="relative w-full h-[100vh] hidden sm:block overflow-visible z-50 mt-90">
            <div className="flex flex-row items-center space-x-20">
                <img src="/Group 253.png" alt="Background Element" className="w-200 h-200 absolute -top-23 z-0" />
                <img src="/Group 254.svg" alt="Background Element" className="w-200 h-200 absolute -top-23 -right-60 z-0" />

            </div>
            <div className="flex flex-col items-center justify-center w-full h-full space-y-2">
                <div className="relative w-full h-full flex flex-row items-end justify-center space-x-2">
                    <div className="w-30 h-60 bg-amber-100 rounded-xl"></div>
                    <div className="w-30 h-60 bg-amber-100 rounded-xl transform -translate-y-[50%]"></div>
                    <div className="w-30 h-60 bg-amber-100 rounded-xl"></div>
                    <div className="w-60 h-30 bg-amber-100 rounded-xl"></div>
                </div>
                <div className="relative w-full h-full flex flex-row items-start justify-center space-x-2">
                    <div className="w-60 h-30 bg-amber-100 rounded-xl"></div>
                    <div className="w-30 h-60 bg-amber-100 rounded-xl transform -translate-y-[50%] "></div>
                    <div className="w-60 h-30 bg-amber-100 rounded-xl"></div>
                    <div className="w-60 h-30 bg-amber-100 rounded-xl"></div>
                </div>
                <div className="relative w-full h-full flex flex-row items-start justify-center space-x-2 transform -translate-y-[50%] -translate-x-[8.3%]">
                    <div className="w-60 h-30 bg-amber-100 rounded-xl"></div>
                    <div className="w-60 h-30 bg-amber-100 rounded-xl"></div>
                    <div className="w-30 h-60 bg-amber-100 rounded-xl "></div>
                    <div className="w-60 h-30 bg-amber-100 rounded-xl"></div>
                </div>
                <div className="relative w-full h-full flex flex-row items-start justify-center space-x-2 transform -translate-y-[100%] -translate-x-[8.3%]">
                    <div className="w-60 h-30 bg-amber-100 rounded-xl"></div>
                    <div className="w-30 h-60 bg-amber-100 rounded-xl"></div>
                    <div className="w-30 h-60 bg-amber-100 rounded-xl transform translate-y-[50%]"></div>
                    <div className="w-30 h-60 bg-amber-100 rounded-xl"></div>

                </div>

            </div>

        </div>
    )
}

export default Glimpse;