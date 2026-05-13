export default function OutroSection() {
  return (
    <section className="py-20 md:py-24 flex flex-col items-center text-center">
      <h2 className="text-2xl font-semibold mb-4">Thank you</h2>
      <p className="text-foreground/60 mb-8">
        If you have questions,
        <br />
        feel free to contact me.
      </p>
      <div className="w-72 md:w-80 rounded-2xl bg-dark/5 dark:bg-light/10 p-6">
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div>
            <span className="text-foreground/40 block mb-1">Phone</span>
            <span className="text-foreground/80">-</span>
          </div>
          <div>
            <span className="text-foreground/40 block mb-1">Email</span>
            <span className="text-foreground/80">-</span>
          </div>
          <div>
            <span className="text-foreground/40 block mb-1">Github</span>
            <span className="text-foreground/80">-</span>
          </div>
        </div>
      </div>
    </section>
  );
}
