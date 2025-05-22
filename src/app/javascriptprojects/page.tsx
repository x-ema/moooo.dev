import React from 'react';

const Page = () => {
  return (
    <div>
        {
            <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <h1 className="text-3xl font-bold">Projects to learn javascript </h1>
            <ol>
                <li><a href="javascriptprojects/calculator">calculator</a></li>
                <li>typing tutor</li>
                <li>inventory management system</li>
                <li>helpdesk ticket system</li>
                <li>plex movie tracker (scan local drive/dir for movies pull info from imdb?)</li>
            </ol>
            </div>
        }
    </div>
  );
};

export default Page;
