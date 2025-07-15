const Footer = () => {
  return (
    <footer className="w-full py-8 flex flex-col items-center justify-center border-t border-slate-800 mt-20">
      <p className="text-slate-400 text-sm font-fira-code">
        Built by <span className="text-accent font-semibold">Kaarlo Sasiang</span> &copy; {new Date().getFullYear()}
      </p>
      <p className="text-slate-500 text-xs font-fira-code mt-2">
        Design inspired by <a href="https://v4.brittanychiang.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">brittanychiang.com</a>
      </p>
    </footer>
  );
};

export default Footer; 