import React from 'react';

type Props = {
  message?: string;
};
export const FullPageSpinner: React.FC<Props> = ({
  message = 'Submitting ...',
}) => (
  <div className="fixed top-0 right-0 z-10 bg-back opacity-85 h-screen w-full flex items-center justify-center">
    <h2 className="font-extralight text-2xl">{message}</h2>
  </div>
);
