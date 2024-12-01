'use client';

import React from 'react';
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav
      className="bg-gray-900 text-white shadow-md fixed top-0 left-0 right-0 z-50"
      style={{ height: '64px' }}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-full">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            className="h-10 w-10 rounded-md"
            src="./logo.png"
            alt="Logo"
          />
          <h1 className="text-xl font-semibold ml-3 hidden sm:block">
            LytportAI
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="../">
            <span className="hover:text-blue-400 transition duration-200 cursor-pointer">
              Dashboard
            </span>
          </Link>
          <Link href="../insights">
            <span className="hover:text-blue-400 transition duration-200 cursor-pointer">
              Insights
            </span>
          </Link>
          <Link href="../chatWithData">
            <span className="hover:text-blue-400 transition duration-200 cursor-pointer">
              Chat With Data
            </span>
          </Link>
          <Link href="../report">
            <span className="hover:text-blue-400 transition duration-200 cursor-pointer">
              Report
            </span>
          </Link>
        </div>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          {/* Notifications Button */}
          <button className="text-gray-400 hover:text-blue-400 transition duration-200">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14V8a6 6 0 10-12 0v6a2.032 2.032 0 01-.595 1.595L4 17h5m1 0v1a3 3 0 006 0v-1m-6 0h6"
              ></path>
            </svg>
          </button>

          {/* User Menu */}
          <div className="relative">
            <button className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
              <img
                className="h-8 w-8 rounded-full border-2 border-gray-700"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User avatar"
              />
              <span className="ml-2 hidden sm:block">Moudjahid Moussa</span>
            </button>
            {/* Placeholder for dropdown items */}
          </div>
        </div>
      </div>
    </nav>
  );
}