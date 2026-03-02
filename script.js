document.addEventListener('DOMContentLoaded', () => {
    // تفعيل مكتبة الحركات عند التمرير
    AOS.init({
        duration: 1000,
        once: true
    });

    // تحسين أداء تشغيل الفيديو
    const video = document.querySelector('.video-bg');
    if (video) {
        video.play().catch(error => {
            console.log("إشعار: وضع توفير الطاقة قد يمنع التشغيل التلقائي.");
        });
    }

    // التمرير الناعم للروابط
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
