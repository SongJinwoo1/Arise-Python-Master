// 1. تتبع حركة الماوس (Elite Cursor)
const cursor = document.getElementById('custom-cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// 2. تتبع كلمة السر لفتح لوحة التحكم
let input = "";
const secret = "admin";

document.addEventListener('keyup', (e) => {
    input += e.key.toLowerCase();
    input = input.slice(-5);

    if (input === secret) {
        document.getElementById('dev-console').style.display = 'block';
        console.log("%c [Calm Solutions] Access Granted", "color: gold; font-weight: bold;");
    }
});

function closeConsole() {
    document.getElementById('dev-console').style.display = 'none';
}

// 3. أنيميشن الظهور عند التمرير
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('.card').forEach(card => observer.observe(card));
