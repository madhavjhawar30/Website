document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.zIndex = '-1';
  document.getElementById('particles-background').appendChild(canvas);

  const ctx = canvas.getContext('2d');

  function init() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', init);

  init();
});
