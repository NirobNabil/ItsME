import ScrollReveal from 'scrollreveal'

const defaults = {
    delay: 100,
    duration: 600,
    distance: '120px',
    container: document.querySelector('.home-container'),
    origin: 'bottom',
    reset: false
}
var sr = ScrollReveal(defaults);
sr.debug = true;                         //debug mode

console.log(sr);
export default sr;