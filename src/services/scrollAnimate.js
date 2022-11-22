export default function scrollAnimate (element) {
    const target = document.querySelector(element);
    target.scrollIntoView({
        behavior: 'smooth'
    });
    console.log('hola');
}