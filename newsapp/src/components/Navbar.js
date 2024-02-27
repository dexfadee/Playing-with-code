import React, { Component } from 'react';
import {Link} from "react-router-dom";

export class Navbar extends Component {

    constructor() {
        super();
        this.state = {
            text: "Light Mode",
            id: 'light',
            navList: 'hidden'
        }
    }

    handleDark = () => {
        if (this.state.id === "dark") {
            document.querySelector('html').classList.add('dark');
            this.setState({ id: "light", text: "Light Mode" });
            document.documentElement.style.cssText = "--theme: #111827";
        }
        else {
            document.querySelector('html').classList.remove('dark');
            this.setState({ id: "dark", text: "Dark Mode" });
            document.documentElement.style.cssText = "--theme: white";
        }
    }

    showMenu = () => {
        this.state.navList === 'hidden' ? this.setState({ navList: 'absolute' }) : this.setState({ navList: 'hidden' });
    }

    render() {

        let darkMode = this.props.darkMode;
        let Logo = this.props.Logo;
        return (
            <nav className="bg-white w-full top-0 left-0 dark:bg-gray-900 sticky z-10">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className="flex w-auto order-1" id="navbar-sticky">
                        <Link to="/" className="flex items-center">
                            <img src={Logo} className="h-8 mr-3" alt="NewsApp Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">NewsApp</span>
                        </Link>
                        <ul className="hidden ml-6 lg:flex p-0 font-medium rounded-lg flex-row space-x-8 mt-0 bg-white dark:bg-gray-900 items-center">
                            <li>
                                <Link to="/" className="block text-gray-900 dark:text-white rounded hover:text-blue-700">Home</Link>
                            </li>
                            <li>
                                <Link to="/business" className="block text-gray-900 dark:text-white rounded hover:text-blue-700">Business</Link>
                            </li>
                            <li>
                                <Link to="/entertainment" className="block text-gray-900 dark:text-white rounded hover:text-blue-700">Entertainment</Link>
                            </li>
                            <li>
                                <Link to="/health" className="block text-gray-900 dark:text-white rounded hover:text-blue-700">Health</Link>
                            </li>
                            <li>
                                <Link to="/science" className="block text-gray-900 dark:text-white rounded hover:text-blue-700">Science</Link>
                            </li>
                            <li>
                                <Link to="/sports" className="block text-gray-900 dark:text-white rounded hover:text-blue-700">Sports</Link>
                            </li>
                            <li>
                                <Link to="/technology" className="block text-gray-900 dark:text-white rounded hover:text-blue-700">Technology</Link>
                            </li>
                        </ul>
                    </div>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700" onClick={this.showMenu} aria-controls="navbar-default" aria-expanded="false">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>

                    <ul className={`${this.state.navList} w-48 top-16 text-sm font-medium text-gray-900 bg-gray-300 border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white z-10`}>
                        <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                            <Link to="/" className="block text-gray-900 dark:text-white rounded hover:text-blue-700">Home</Link>
                        </li>
                        <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                            <Link to="/business" className="block text-gray-900 dark:text-white rounded hover:text-blue-700">Business</Link>
                        </li>
                        <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                            <Link to="/entertainment" className="block text-gray-900 dark:text-white rounded hover:text-blue-700">Entertainment</Link>
                        </li>
                        <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                            <Link to="/health" className="block text-gray-900 dark:text-white rounded hover:text-blue-700">Health</Link>
                        </li>
                        <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                            <Link to="/science" className="block text-gray-900 dark:text-white rounded hover:text-blue-700">Science</Link>
                        </li>
                        <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                            <Link to="/sports" className="block text-gray-900 dark:text-white rounded hover:text-blue-700">Sports</Link>
                        </li>
                        <li className="w-full px-4 py-2 rounded-b-lg">
                            <Link to="/technology" className="block text-gray-900 dark:text-white rounded hover:text-blue-700">Technology</Link>
                        </li>
                    </ul>

                    <div className="flex order-2 h-9">
                        <img src={darkMode} alt="Dark Mode" className='dark:invert mr-0 hover:cursor-pointer ' onClick={this.handleDark}/>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar