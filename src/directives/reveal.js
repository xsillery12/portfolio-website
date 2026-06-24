// Adds a scroll-triggered reveal. Usage: <div v-reveal> ... </div>
export const reveal = {
  mounted(el) {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.classList.add("reveal");

    if (reduce || !("IntersectionObserver" in window)) {
      el.classList.add("in");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
  },
};
