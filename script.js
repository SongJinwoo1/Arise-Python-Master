const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

let particles = [];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const text = "Calm Solutions";
ctx.fillStyle = 'white';
ctx.font = 'bold 70px Cairo';
ctx.textAlign = 'center';
ctx.fillText(text, canvas.width/2, canvas.height/2);

const textCoordinates = ctx.getImageData(0, 0, canvas.width, canvas.height);

class Particle {
    constructor(x, y) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.baseX = x;
        this.baseY = y;
        this.size = 1.5;
        this.forming = true; // تبدأ الجزيئات متجمعة لتشكيل الاسم
    }

    draw() {
        ctx.fillStyle = '#4fc3f7';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }

    update() {
        let targetX = this.forming ? this.baseX : this.x + (Math.random() - 0.5) * 5;
        let targetY = this.forming ? this.baseY : this.y + (Math.random() - 0.5) * 5;

        this.x += (targetX - this.x) / 15;
        this.y += (targetY - this.y) / 15;
    }
}

function init() {
    particles = [];
    for (let y = 0; y < textCoordinates.height; y += 4) {
        for (let x = 0; x < textCoordinates.width; x += 4) {
            if (textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128) {
                particles.push(new Particle(x, y));
            }
        }
    }
}

// تبديل بين تجميع وتفريق الجزيئات كل 6 ثوانٍ
setInterval(() => {
    particles.forEach(p => p.forming = !p.forming);
}, 6000);

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.draw();
        p.update();
    });
    requestAnimationFrame(animate);
}

init();
animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});
