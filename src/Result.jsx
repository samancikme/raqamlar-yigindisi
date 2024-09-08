import React from 'react'

const Result = ({ children }) => {
    return (
        <div>
            < div className='sm:text-[26px] text-[20px] font-bold flex-col sm:flex-row text-center flex justify-center gap-3 items-center  text-black mt-5'>
                <span>
                    Natiyje:
                </span>
                <span>{children}</span>
            </div>
        </div>
    )
}

export default Result
