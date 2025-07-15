const Footer = () => {
  return (
    <footer className="w-full py-8 flex flex-col items-center justify-center border-t border-slate-800 mt-20">
      <p className="text-slate-400 text-sm font-fira-code">
        Designed &amp; Built by <span className="text-accent font-semibold">Kaarlo Sasiang</span> &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer; 