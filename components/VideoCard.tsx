import React from "react";

const VideoCard = () => {
  return (
    <div className="container px-2 md:px-4 mx-auto py-5 space-y-5">
      <h3 className="text-3xl text-primary text-center">Nasa proizvodnja</h3>
      <p className="first-letter:pl-6">
        Kombinacijom savremene tehnologije i stručnog tima, u mogućnosti smo da
        realizujemo i najzahtevnije projekte, u dogovorenim rokovima.
      </p>
      <section className="grid grid-cols-2 gap-2">
        <video
          src="/video1.mp4"
          type="video/mp4"
          controls
          autoPlay
          loop
          muted
          className="w-full"
        />
        <video
          src="/video2.mp4"
          type="video/mp4"
          controls
          autoPlay
          loop
          muted
          className="w-full"
        />
        <video
          src="/video3.mp4"
          type="video/mp4"
          controls
          autoPlay
          loop
          muted
          className="w-full"
        />
        <video
          src="/video4.mp4"
          type="video/mp4"
          controls
          autoPlay
          loop
          muted
          className="w-full"
        />
      </section>
    </div>
  );
};

export default VideoCard;
