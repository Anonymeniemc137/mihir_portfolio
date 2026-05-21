import React, { useEffect, useState } from 'react';

function MouseEffects() {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [isClicking, setIsClicking] = useState(false);
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  const move = (e) => {
    setCursorX(e.clientX);
    setCursorY(e.clientY);
  };

  const handleMouseDown = () => setIsClicking(true);
  const handleMouseUp = () => setIsClicking(false);

  const handleLinkHover = (hovering) => setIsHoveringLink(hovering);

  useEffect(() => {
    document.addEventListener('mousemove', move);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    const links = document.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('mouseenter', () => handleLinkHover(true));
      link.addEventListener('mouseleave', () => handleLinkHover(false));
    });

    return () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);

      links.forEach(link => {
        link.removeEventListener('mouseenter', () => handleLinkHover(true));
        link.removeEventListener('mouseleave', () => handleLinkHover(false));
      });
    };
  }, []);

  return (
    <div>
      <style>
        {`
          * {
            margin: 0;
            cursor: none;
          }

          #cursor {
            position: fixed;
            background-color: ${isClicking ? '#f2f1ed' : 'white'};
            height: ${isHoveringLink ? '20px' : '10px'};
            width: ${isHoveringLink ? '20px' : '10px'};
            border-radius: 50%;
            transform: translate(-50%, -50%);
            pointer-events: none;
            z-index: 10000;   /* ← this brings the cursor above the modal */
            transition: background-color 0.2s ease, height 0.2s ease, width 0.2s ease;
          }

          a {
            color: #00f;
            text-decoration: none;
            font-size: 18px;
            margin-top: 20px;
            display: inline-block;
          }

          a:hover {
            text-decoration: underline;
          }
        `}
      </style>

      <div
        id="cursor"
        style={{ left: `${cursorX}px`, top: `${cursorY}px` }}
      ></div>
    </div>
  );
}

export default MouseEffects;
