document.getElementById('year').textContent = new Date().getFullYear();
const ecg = document.getElementById('ecgPath');
if (ecg && ecg.getTotalLength) ecg.style.setProperty('--len', Math.ceil(ecg.getTotalLength()));

// Project, award and logo pictures: try common extensions before giving up
const exts = ['svg', 'png', 'jpg', 'jpeg', 'webp', 'SVG', 'PNG', 'JPG', 'JPEG'];
document.querySelectorAll('.shot img, .pic img, .logo').forEach(img => {
  const m = img.getAttribute('src').match(/^(.*)\.([^./]+)$/);
  const queue = exts.filter(e => e !== m[2]);
  const next = () => {
    if (queue.length) img.src = m[1] + '.' + queue.shift();
    else (img.closest('.pic') || img).remove();
  };
  img.addEventListener('error', next);
  if (img.complete && img.naturalWidth === 0) next();
});
