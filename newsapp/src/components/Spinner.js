import React, { Component } from 'react'

export default class Spinner extends Component {
    render() {
        return (
            <div className='flex bg-transparent items-center justify-center py-4'>
                <span className='w-12 h-12 rounded-[50%] inline-block border-t-4 border-r-4 dark:border-t-[#FFF] border-r-[transparent] box-border animate-spin border-t-[#1d1c1c]'></span>
            </div>
        )
    }
}
