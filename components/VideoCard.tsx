import React from "react";

const VideoCard = () => {
  return (
    <div className="container px-2 md:px-4 mx-auto py-5 md:py-10 space-y-5 md:space-y-10">
      <h3 className="text-3xl md:text-5xl text-primary text-center">
        Naša proizvodnja
      </h3>
      <p className="first-letter:pl-6">
        Kombinacijom savremene tehnologije i stručnog tima, u mogućnosti smo da
        realizujemo i najzahtevnije projekte, u dogovorenim rokovima.
      </p>
      <section className="grid grid-cols-2 md:grid-cols-4 gap-2">
        <video controls autoPlay loop muted className="w-full">
          {" "}
          <source src="/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video controls autoPlay loop muted className="w-full">
          {" "}
          <source src="/video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video controls autoPlay loop muted className="w-full">
          {" "}
          <source src="/video3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video controls autoPlay loop muted className="w-full">
          {" "}
          <source src="/video4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
    </div>
  );
};

export default VideoCard;
