export const VideoSection = () => {
  return (
    <div className=" box-border caret-transparent overflow-visible  md:h-75
      absolute left-0 w-full z-10 h-55 pointer-events-none -bottom-27.5 md:-bottom-17.5">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="box-border caret-transparent h-full max-w-full mix-blend-multiply object-cover w-full"
      >
        <source
          src="https://www.the3bsbakery.store/videos/drip-video2.mp4"
          type="video/mp4"
          className="text-black box-border caret-transparent leading-[normal] pointer-events-auto font-times_new_roman"
        />
      </video>

    </div>
  );
};