export default function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2 no-underline">
      <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-blue" />
      <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-green" />
      <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-lime" />
    </a>
  );
}
