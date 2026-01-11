export const VideoSection = () => {
  return (
    <div className=" box-border caret-transparent overflow-visible  md:h-[300px] 
      absolute left-0 w-full z-10 h-[220px] pointer-events-none -bottom-[110px] md:-bottom-[70px] ">
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