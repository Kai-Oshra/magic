// ==== Магические частицы на фоне ====
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

let W, H;
function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

// Палитра магических цветов
const PALETTE = [
    [140, 100, 255],  // фиолетовый
    [90, 150, 255],   // синий
    [200, 120, 255],  // сиреневый
    [120, 200, 255],  // голубой
];

class FloatingParticle {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.size = 0.8 + Math.random() * 2.2;
        this.speedX = (Math.random() - 0.5) * 0.25;
        this.speedY = -0.15 - Math.random() * 0.35;
        this.alpha = 0.2 + Math.random() * 0.6;
        this.pulse = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.01 + Math.random() * 0.02;
        this.color = PALETTE[Math.floor(Math.random() * PALETTE.length)];
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.pulse += this.pulseSpeed;

        if (this.y < -10 || this.x < -10 || this.x > W + 10) {
            this.reset();
            this.y = H + 10;
        }
    }
    draw() {
        const a = this.alpha * (0.6 + 0.4 * Math.sin(this.pulse));
        const [r, g, b] = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
        ctx.shadowColor = `rgba(${r}, ${g}, ${b}, ${a})`;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
    }
}

const particles = Array.from({ length: 90 }, () => new FloatingParticle());

function animate() {
    ctx.clearRect(0, 0, W, H);
    for (const p of particles) {
        p.update();
        p.draw();
    }
    requestAnimationFrame(animate);
}
animate();

// ==== Кнопки ====
document.querySelectorAll('.magic-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const action = btn.dataset.action;
        console.log('Нажато:', action);
        // Пока никуда не ведём — просто отклик для проверки
    });
});
