// تأثير الخلفية
particlesJS("particles-js", {
    particles: {
        number: { value: 40 },
        color: { value: "#9d4edd" },
        opacity: { value: 0.3 },
        size: { value: 2 },
        line_linked: { enable: true, distance: 130, color: "#9d4edd", opacity: 0.2 },
        move: { speed: 1 }
    }
});

const form = document.getElementById('direct-whatsapp-form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // جلب البيانات
    const name = document.getElementById('userName').value;
    const age = document.getElementById('userAge').value;
    const level = document.getElementById('userLevel').value;

    const adminPhone = "201055719273"; // رقم نائبك المصري
    const groupLink = "https://chat.whatsapp.com/LX6YlavRiSWDUWSxVvGxD9"; // رابط الجروب

    // تنسيق الرسالة المرسلة للنائب
    const message = 🚀 *طلب انضمام جديد لـ Arise Tech*%0A%0A👤 *الاسم:* ${name}%0A🎂 *العمر:* ${age}%0A💻 *المستوى:* ${level};

    // فتح الواتساب لإرسال البيانات
    window.open(https://wa.me/${adminPhone}?text=${message}, '_blank');

    // تحويل الموقع الأصلي لرابط الجروب بعد ثانية واحدة
    setTimeout(() => {
        window.location.href = groupLink;
    }, 1000);
});
