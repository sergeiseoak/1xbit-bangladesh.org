document.querySelector('.menu')?.addEventListener('click',()=>document.querySelector('nav')?.classList.toggle('open'));
// Keep the dropdown usable with touch and keyboard, and close it when clicking outside.
document.addEventListener('click', function(event) {
  document.querySelectorAll('.games-dropdown[open]').forEach(function(dropdown) {
    if (!dropdown.contains(event.target)) dropdown.removeAttribute('open');
  });
});
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    document.querySelectorAll('.games-dropdown[open]').forEach(function(dropdown) { dropdown.removeAttribute('open'); });
  }
});
