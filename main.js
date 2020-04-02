const dqs = x => document.querySelector(`${x}`);

const wifi = dqs('#wifi-dark-btn');
const bluetooth = dqs('#bluetooth-dark-btn');
const bell = dqs('#bell-dark-btn');
const bolt = dqs('#bolt-dark-btn');
const volume = dqs('#volume-dark-btn');
const plane = dqs('#plane-dark-btn');
const share = dqs('#share-dark-btn');

wifi.addEventListener('click', () => wifi.classList.toggle('active'));
bluetooth.addEventListener('click', () => bluetooth.classList.toggle('active'));
bell.addEventListener('click', () => bell.classList.toggle('active'));
bolt.addEventListener('click', () => bolt.classList.toggle('active'));
volume.addEventListener('click', () => volume.classList.toggle('active'));
plane.addEventListener('click', () => plane.classList.toggle('active'));
share.addEventListener('click', () => share.classList.toggle('active'));