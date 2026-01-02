// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { items } from "@/components/constant";

// const images = [...items, ...items];

// export default function InternPhotos() {
//   return (
//     <div className="overflow-hidden w-full py-8">
//       <motion.div
//         className="flex w-max"
//         animate={{ x: ["0%", "-50%"] }}
//         transition={{
//           repeat: Infinity,
//           duration: 35,
//           ease: "linear",
//         }}
//       >
//         {images.map((img, index) => (
//           <div
//             key={index}
//             className="relative min-w-[320px] h-[210px] mx-4 overflow-hidden rounded-2xl"
//           >
//             <Image
//               src={img}
//               alt={`intern-${index}`}
//               fill
//               className="object-cover"
//               sizes="320px"
//               priority={index < 3}
//             />
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// }

// // // @ts-nocheck
// // 'use client';

// // import React, { useEffect, useRef, useState } from 'react';
// // import { motion } from 'framer-motion';
// // import Image from 'next/image';
// // import { items } from '@/components/constant';

// // function InternPhoto() {
// //   const [width, setWidth] = useState(0);
// //   const carousel = useRef(null);

// //   useEffect(() => {
// //     if (carousel.current) {
// //       setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
// //     }
// //   }, []);

// //   return (
// //     <div className='w-full overflow-hidden px-4'>
// //       <motion.div
// //         ref={carousel}
// //         drag='x'
// //         whileDrag={{ scale: 0.95 }}
// //         dragConstraints={{ right: 0, left: -width }}
// //         className='flex gap-4 cursor-grab active:cursor-grabbing'
// //       >
// //         {items.slice(0, 8).map((itemData, index) => (
// //           <motion.div key={index} className='min-w-[16rem] md:min-w-[20rem] min-h-[20rem] p-2'>
// //             <Image
// //               src={itemData}
// //               width={400}
// //               height={400}
// //               alt={`carousel-img-${index}`}
// //               className='w-full h-full object-cover pointer-events-none rounded-md'
// //             />
// //           </motion.div>
// //         ))}
// //       </motion.div>
// //     </div>
// //   );
// // }

// // export default InternPhoto;



// @ts-nocheck
'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { items } from '@/components/constant';

function InternPhoto() {
  const [width, setWidth] = useState(0);
  const carousel = useRef(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <div className='w-full overflow-hidden px-4'>
      <motion.div
        ref={carousel}
        drag='x'
        whileDrag={{ scale: 0.95 }}
        dragConstraints={{ right: 0, left: -width }}
        className='flex gap-4 cursor-grab active:cursor-grabbing'
      >
        {items.slice(0, 8).map((itemData, index) => (
          <motion.div key={index} className='min-w-[16rem] md:min-w-[20rem] min-h-[20rem] p-2'>
            <Image
              src={itemData}
              width={400}
              height={400}
              alt={`carousel-img-${index}`}
              className='w-full h-full object-cover pointer-events-none rounded-md'
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default InternPhoto;