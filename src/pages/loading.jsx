// Loading.js
import React from 'react';

 export function Loading() {
    return (
        <>
         <div className="bg-black relative flex h-screen content-center items-center justify-center pt-16 pb-16">
            <div className=" h-1/2 w-1/2 bg-[url('/img/intro_logo.gif')] bg-cover bg-center items-center justify-center" />
         </div>            
        </>        
        
    );
};

export default Loading;