import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let {title, description, image, articleUrl, noImg, author, date, source} = this.props;

        return (

            <div className="max-w-sm bg-gray-300 rounded-lg shadow dark:bg-gray-700">
                <span className="absolute bg-green-100 text-green-900 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">{source}</span>
                <a href={articleUrl} rel="noreferrer" target='_blank'>
                    <img className="rounded-t-lg" src={/* null somehow reuturns a false value */!image? noImg: image} alt="" />
                </a>
                <div className="p-5">
                
                    <a href={articleUrl} rel="noreferrer" target='_blank'>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-slate-300">{description}</p>
                    <p className='text-gray-500 dark:text-gray-400 my-4'>By {author? author : 'Unknown'} on {`${new Date(date).toDateString()}, ${new Date(date).toTimeString()}`}</p>
                    <a href={articleUrl} rel="noreferrer" target='_blank' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-slate-200 dark:hover:bg-slate-100 dark:text-black">
                        Read more
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>

        )
    }
}

export default Newsitem