// import React, { useEffect, useState } from 'react';

// const SpotlightEffect = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e) => {
//     setPosition({ x: e.clientX, y: e.clientY });
//   };

//   useEffect(() => {
//     document.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return (
//     <div
//       className="fixed inset-0 pointer-events-none z-0"
//       style={{
//         background: `
//           radial-gradient(
//             circle at ${position.x}px ${position.y}px,
//             rgba(255, 255, 255, 0.15) 0%,
//             rgba(0, 0, 0, 0.6) 70%
//           )
//         `,
//         width: '100vw',
//         height: '100vh',
//       }}
//     />
//   );
// };

// export default SpotlightEffect;
