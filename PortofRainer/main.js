// Mengambil elemen yang ingin diamati
var section2 = document.querySelector('.About'); // Ganti dengan selector dari 'section 2'
var text = document.getElementById('text');

// Function animasi saat scroll
function animateTextOnScroll(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Menjalankan animasi hanya saat section terlihat
            var newDom = '';
            var animationDelay = 6;

            for(let i = 0; i < text.innerText.length; i++) {
                newDom += '<span class="char">' + (text.innerText[i] === ' ' ? '&nbsp;' : text.innerText[i]) + '</span>';
            }

            text.innerHTML = newDom;
            var length = text.children.length;

            for(let i = 0; i < length; i++) {
                text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
            }

            // Optional: stop observer after first trigger
            observer.unobserve(section2);
        }
    });
}

// Setup Intersection Observer
let options = {
    threshold: 0.5 // Seberapa besar bagian elemen yang harus terlihat sebelum animasi berjalan
};

let observer = new IntersectionObserver(animateTextOnScroll, options);

// Observe section 2
observer.observe(section2);


