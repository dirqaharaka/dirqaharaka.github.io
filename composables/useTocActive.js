import { ref, onMounted, onUnmounted } from 'vue';

export default () => {
  const activeId = ref('');

  let observer = null;

  const init = (selector = 'article h1, article h2, article h3, article h4') => {
    if (typeof window === 'undefined') return;

    const headings = document.querySelectorAll(selector);
    if (!headings.length) return;

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            activeId.value = entry.target.id;
          }
        }
      },
      {
        rootMargin: '-100px 0px -60% 0px',
        threshold: 0,
      }
    );

    headings.forEach((heading) => {
      if (heading.id) {
        observer.observe(heading);
      }
    });
  };

  onUnmounted(() => {
    if (observer) {
      observer.disconnect();
    }
  });

  return { activeId, init };
};
