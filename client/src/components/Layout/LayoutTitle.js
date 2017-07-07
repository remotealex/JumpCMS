import React from 'react';

const LayoutTitle = ({ children }) => (
  <h1>
    { children }

    <style jsx>{`
      h1 {
        font-size: 20px;
        margin: 0 0 15px;
      }
    `}</style>
  </h1>
);


export default LayoutTitle;
