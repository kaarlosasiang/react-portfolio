export default function HeroEmail() {
  return (
    <div className="hidden lg:block fixed right-16 w-3 bottom-0">
      <p className="tracking-widest rotate-90 font-fira-code text-white duration-200 hover:text-accent hover:-translate-y-[4px] text-sm mb-[180px]">
        <a href="mailto:sasiang64@gmail.com ">sasiang64@gmail.com</a>
      </p>
      <div className="flex flex-col gap-5 relative after:content-[''] after:block after:bg-[#999] after:w-px after:h-[200px] after:mx-auto"></div>
    </div>
  );
}
