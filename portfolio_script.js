// ローディング画面の制御
window.addEventListener('load', function() {
    const loadingScreen = document.querySelector('.loading-screen');
    
    // 3秒後にローディング画面をフェードアウト（全ての文字のアニメーション完了後）
    setTimeout(() => {
        loadingScreen.classList.add('fade-out');
        
        // フェードアウト完了後にローディング画面を削除
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 3000);
});

// スライドショー機能
let currentSlide = 0;
const slides = document.querySelectorAll('.slide-image');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// 3秒ごとに画像を切り替え
setInterval(nextSlide, 3000);

// スムーズスクロール
document.addEventListener('DOMContentLoaded', function() {
    const logoLink = document.querySelector('.logo h1 a');
    
    if (logoLink) {
        logoLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const profileSection = document.querySelector('.profile');
            profileSection.scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    }
});

// ヘッダーのスクロール効果
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(26, 26, 26, 0.95)';
    } else {
        header.style.background = 'rgba(26, 26, 26, 0.9)';
    }
});

// 画像の遅延読み込み（Intersection Observer）
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
        }
    });
});

// 遅延読み込み対象の画像を監視
document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
});

// アニメーション効果
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// アニメーション対象要素の初期化と監視
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.information-item, .profile-info, .profile-image');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        animationObserver.observe(element);
    });
});
