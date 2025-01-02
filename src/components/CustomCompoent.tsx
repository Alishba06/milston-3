import { PortableTextComponents } from '@portabletext/react';

export const components: PortableTextComponents = {
    block: {
        // Define custom block handling here if needed
        h4: ({ children }) => (
            <h4 className="font-bold text-white text-lg sm:text-xl tracking-wide leading-relaxed hover:text-gray-300 transition duration-300 ease-in-out">
              {children}
            </h4>
          )
          
    },
    listItem:{
        bullet:({children})=><li className='list-disc marker:text-accentDarkSecondary'>{children}</li>
    },

    marks:{
        strong: ({ children }) => (
            <strong className="font-semibold text-gray-900 dark:text-gray-100 text-base sm:text-lg tracking-tight hover:text-blue-500 transition duration-300 ease-in-out">
              {children}
            </strong>
          )
          
    }
};

