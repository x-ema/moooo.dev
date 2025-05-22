import React from 'react';

const Page = () => {
  return (
    <div>
        {
            <div className="grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <h1 className="text-3xl font-bold">Calculator </h1>
              <div className="grid grid-cols-3 gap-4">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
              </div>
            </div>
        }
    </div>
  );
};

export default Page;
