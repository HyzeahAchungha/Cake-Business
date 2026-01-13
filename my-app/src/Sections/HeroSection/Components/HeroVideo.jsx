export const HeroVideo = () => {
  return (
    <div className="absolute box-border caret-transparent h-full w-full inset-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="box-border caret-transparent h-full max-w-full object-cover pointer-events-none w-full"
      >
        <source
          src="https://www.the3bsbakery.store/videos/hero-cake.mp4"
          type="video/mp4"
          className="text-black box-border caret-transparent leading-[normal] pointer-events-auto font-times_new_roman"
        />
      </video>
      <div className="absolute bg-[oklab(0_0_0/0.4)] box-border caret-transparent mix-blend-multiply inset-0"></div>
      <div className="absolute bg-[linear-gradient(to_top,oklab(0.388996_0.100903_-0.144178/0.6)_0%,rgba(0,0,0,0)_50%,oklab(0_0_0/0.3)_100%)] box-border caret-transparent inset-0"></div>
    </div>
  );
};