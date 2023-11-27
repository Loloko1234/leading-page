import React from "react";

function Main() {
  return (
    <main className="flex mt-24 relative">
      <div className="ml-auto max-[600px]:hidden">
        <img
          src="/images/bg-intro-desktop.svg"
          alt="Background"
          className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4"
          style={{ zIndex: 5 }} // Ustawienie z-index dla tła, mniejszy niż dla obrazu z mockupami
        />
        <img
          src="/images/image-mockups.png"
          alt="Mockups"
          className="absolute top-1/2 transform -translate-y-1/5 right-0 translate-x-1/5"
          style={{ zIndex: 10 }} // Ustawienie z-index dla obrazu z mockupami
        />
      </div>
      <div className="ml-auto">
        <img
          src="/images/bg-intro-mobile.svg"
          alt="Background"
          className="absolute top-0 right-0 -translate-y-14 translate-x-0"
          style={{ zIndex: 5 }} // Ustawienie z-index dla tła, mniejszy niż dla obrazu z mockupami
        />
        <img
          src="/images/image-mockups.png"
          alt="Mockups"
          className="absolute top-1/2 transform -translate-y-1/5 right-0 translate-x-1/5 max-[400px]:-translate-y-1/3 max-[400px]:translate-x-0"
          style={{ zIndex: 10 }} // Ustawienie z-index dla obrazu z mockupami
        />
      </div>
    </main>
  );
}

export default Main;
