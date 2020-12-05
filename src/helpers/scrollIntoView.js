import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

export function scrollIntoView(menuEl, focusedEl) {
  const menuRect = menuEl.getBoundingClientRect();
  const focusedRect = focusedEl.getBoundingClientRect();
  const overScroll = focusedEl.offsetHeight / 3;

  if (focusedRect.bottom + overScroll > menuRect.bottom) {
    menuEl.scrollTo(
      menuEl,
      Math.min(focusedEl.offsetTop + focusedEl.clientHeight - menuEl.offsetHeight + overScroll, menuEl.scrollHeight)
    );
  } else if (focusedRect.top - overScroll < menuRect.top) {
    menuEl.scrollTo(menuEl, Math.max(focusedEl.offsetTop - overScroll, 0));
  }
}
