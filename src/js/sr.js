import assignProps from './assignProps';
export default function () {
  const defaultProps = {
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    distance: '30px',
    duration: 500,
    desktop: true,
    mobile: true
  };

  /* Section Title */
  ScrollReveal().reveal('.section-title',
    assignProps(
      {
        delay: 200, distance: '0px',
        origin: 'bottom'
      }, defaultProps)
  );

  /* Hero Section */
  ScrollReveal().reveal('.hero-title',
    assignProps(
      {
        delay: 0,
        origin: window.innerWidth > 768 ? 'left' : 'bottom'
      }, defaultProps)
  );

  ScrollReveal().reveal('.hero-cta',
    assignProps(
      {
        delay: 0,
        origin: window.innerWidth > 768 ? 'left' : 'bottom'
      }, defaultProps)
  );

  /* About Section */
  ScrollReveal().reveal('.about-wrapper__image',
    assignProps(
      {
        delay: 500,
        origin: 'bottom'
      }, defaultProps)
  );

  ScrollReveal().reveal('.about-wrapper__info',
    assignProps(
      {
        delay: 500,
        origin: window.innerWidth > 768 ? 'left' : 'bottom'
      }, defaultProps)
  );

  ScrollReveal().reveal('.about-wrapper__image-logo',
    assignProps(
      {
        delay: 500,
        origin: window.innerWidth > 768 ? 'right' : 'bottom'
      }, defaultProps)
  );

  ScrollReveal().reveal('.about-wrapper__info-text',
    assignProps(
      {
        delay: 500,
        origin: window.innerWidth > 768 ? 'bottom' : 'bottom'
      }, defaultProps)
  );

  /* Projects Section */
  ScrollReveal().reveal('.project-wrapper__text',
    assignProps(
      {
        delay: 300,
        origin: window.innerWidth > 768 ? 'left' : 'bottom'
      }, defaultProps)
  );

  ScrollReveal().reveal('.project-wrapper__image',
    assignProps(
      {
        delay: 500,
        origin: window.innerWidth > 768 ? 'right' : 'bottom'
      }, defaultProps)
  );

  /* Contact Section */
  ScrollReveal().reveal('.contact-wrapper',
    assignProps(
      {
        delay: 400,
        origin: 'bottom'
      }, defaultProps)
  );
}
