function scrollToPage2() {
  const page2 = document.getElementById('page2');
  if (page2) {
    page2.scrollIntoView({ behavior: 'smooth' });
  }
}

function openLink(key) {
  if (typeof LINKS !== 'undefined' && LINKS[key]) {
    window.open(LINKS[key], '_blank');
  } else {
    console.warn('Link not found in LINKS for key:', key);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const arrow = document.getElementById('scrollArrow');
  const xButton = document.getElementById('xButton');
  const iframe = document.getElementById('dexscreenerFrame');

  if (arrow) {
    arrow.addEventListener('click', scrollToPage2);
  }

  if (xButton) {
    xButton.addEventListener('click', () => openLink('xLink'));
  }

  if (iframe && typeof LINKS !== 'undefined' && LINKS.dexScreener) {
    iframe.src = LINKS.dexScreener;
  }
});
