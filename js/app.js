document.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) {
    return;
  }

  const card = event.target.closest(".flip-card");
  if (!card) {
    return;
  }

  const isFlipped = card.classList.toggle("is-flipped");
  card.setAttribute("aria-pressed", String(isFlipped));
});