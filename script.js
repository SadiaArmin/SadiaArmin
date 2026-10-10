document.getElementById('year').textContent = new Date().getFullYear();
const ecg = document.getElementById('ecgPath');
if (ecg && ecg.getTotalLength) ecg.style.setProperty('--len', Math.ceil(ecg.getTotalLength()));
