import React from "react";

const CardContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-6 mx-auto z-50">
      {children}
    </div>
  );
};

export default CardContainer;
