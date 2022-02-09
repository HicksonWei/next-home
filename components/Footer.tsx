import React from 'react'

const Footer = () => {
  return (
    <div className="flex items-center bg-gray-700 p-4 text-white">
      <div className="mr-auto flex ">
        <a
          href="https://github.com/HicksonWei/About_me"
          className="mr-4 block p-1"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github fa-2xl"></i>
        </a>
        <a
          href="https://www.instagram.com/hank199021/"
          className="block p-1"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-instagram fa-2xl"></i>
        </a>
      </div>
      <div>© 2022 {`<DevHank />`}</div>
    </div>
  )
}

export default Footer
