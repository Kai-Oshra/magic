// ============ ФОНОВЫЕ ЧАСТИЦЫ ============
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

let W, H;
function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

const PALETTE = [
    [140, 100, 255],
    [90, 150, 255],
    [200, 120, 255],
    [120, 200, 255],
];

class FloatingParticle {
    constructor() { this.reset(); }
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
    for (const p of particles) { p.update(); p.draw(); }
    requestAnimationFrame(animate);
}
animate();

// ============ СОСТОЯНИЕ ============
const MAX_WORLDS = 10;
const MAX_NAME_LEN = 10;
const MAX_DESC_LEN = 75;

const state = {
    worlds: [],          // { id, name, desc }
    nextId: 1,
    renameId: null,      // id мира, который переименовываем
};

// ============ НАВИГАЦИЯ ============
function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('screen-active'));
    document.getElementById('screen-' + id).classList.add('screen-active');

    const homeBtn = document.getElementById('home-btn');
    if (id === 'menu') {
        homeBtn.classList.add('hidden');
        homeBtn.classList.remove('visible');
    } else {
        homeBtn.classList.remove('hidden');
        requestAnimationFrame(() => homeBtn.classList.add('visible'));
    }
}

document.querySelectorAll('[data-goto]').forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.goto;
        if (target === 'worlds') { renderWorlds(); }
        showScreen(target);
    });
});

document.getElementById('home-btn').addEventListener('click', () => {
    showScreen('menu');
});

// ============ ТОСТ ============
const toastEl = document.getElementById('toast');
const toastText = document.getElementById('toast-text');
let toastTimer = null;

function showToast(text) {
    toastText.textContent = text;
    toastEl.classList.remove('hidden');
    requestAnimationFrame(() => toastEl.classList.add('visible'));
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toastEl.classList.remove('visible');
        setTimeout(() => toastEl.classList.add('hidden'), 500);
    }, 2200);
}

// ============ ЭКРАН МИРОВ ============
const worldsList = document.getElementById('worlds-list');
const createWorldBtn = document.getElementById('create-world-btn');

function renderWorlds() {
    worldsList.innerHTML = '';

    state.worlds.forEach(world => {
        const row = document.createElement('div');
        row.className = 'world-row';
        row.dataset.id = world.id;

        const info = document.createElement('div');
        info.className = 'world-row-info';

        const nameEl = document.createElement('div');
        nameEl.className = 'world-row-name';
        nameEl.textContent = world.name;

        const descEl = document.createElement('div');
        descEl.className = 'world-row-desc' + (world.desc ? '' : ' empty');
        descEl.textContent = world.desc || 'без описания';

        info.appendChild(nameEl);
        info.appendChild(descEl);

        const actions = document.createElement('div');
        actions.className = 'world-row-actions';

        // кнопка переименования
        const renameBtn = document.createElement('button');
        renameBtn.className = 'icon-btn';
        renameBtn.title = 'Переименовать';
        renameBtn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 20h9"/>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
            </svg>
        `;
        renameBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            openRename(world.id);
        });

        actions.appendChild(renameBtn);

        row.appendChild(info);
        row.appendChild(actions);

        // клик по ряду (кроме кнопок) — "открыть мир" (пока просто лог)
        row.addEventListener('click', () => {
            console.log('Открыть мир:', world.name);
            showToast('Мир: ' + world.name);
        });

        worldsList.appendChild(row);
    });

    // Кнопка "Создать мир" — всегда под списком.
    // Если миров 10 — скрываем.
    if (state.worlds.length >= MAX_WORLDS) {
        createWorldBtn.classList.add('hidden');
    } else {
        createWorldBtn.classList.remove('hidden');
    }
}

// ============ СОЗДАНИЕ МИРА ============
const inputName = document.getElementById('input-name');
const inputDesc = document.getElementById('input-desc');
const counterName = document.getElementById('counter-name');
const counterDesc = document.getElementById('counter-desc');
const stepName = document.getElementById('step-name');
const stepDesc = document.getElementById('step-desc');

// Шаг 1 → Шаг 2
document.getElementById('next-to-desc').addEventListener('click', () => {
    stepName.classList.add('hidden');
    stepDesc.classList.remove('hidden');
    // фокус на поле описания
    setTimeout(() => inputDesc.focus(), 100);
});

// Шаг 2 → Шаг 1 (стрелочка и кнопка "Назад")
function backToName() {
    stepDesc.classList.add('hidden');
    stepName.classList.remove('hidden');
    setTimeout(() => inputName.focus(), 100);
}
document.getElementById('back-to-name').addEventListener('click', backToName);
document.getElementById('cancel-to-name').addEventListener('click', backToName);

// Счётчики символов
inputName.addEventListener('input', () => {
    const len = inputName.value.length;
    counterName.textContent = `${len} / ${MAX_NAME_LEN}`;
    counterName.classList.toggle('limit', len >= MAX_NAME_LEN);
});

inputDesc.addEventListener('input', () => {
    const len = inputDesc.value.length;
    counterDesc.textContent = `${len} / ${MAX_DESC_LEN}`;
    counterDesc.classList.toggle('limit', len >= MAX_DESC_LEN);
});

// Открытие экрана создания — сбрасываем поля
document.getElementById('create-world-btn').addEventListener('click', () => {
    openCreate();
});

function openCreate() {
    // Плейсхолдер с автоматическим именем
    const defaultName = 'Мир ' + (state.worlds.length + 1);
    inputName.value = '';
    inputName.placeholder = defaultName;
    inputDesc.value = '';
    counterName.textContent = `0 / ${MAX_NAME_LEN}`;
    counterDesc.textContent = `0 / ${MAX_DESC_LEN}`;
    counterName.classList.remove('limit');
    counterDesc.classList.remove('limit');

    stepDesc.classList.add('hidden');
    stepName.classList.remove('hidden');

    showScreen('create');
    setTimeout(() => inputName.focus(), 150);
}

// Финальное создание
document.getElementById('finish-create').addEventListener('click', () => {
    const defaultName = 'Мир ' + (state.worlds.length + 1);
    const name = (inputName.value.trim() || defaultName).slice(0, MAX_NAME_LEN);
    const desc = inputDesc.value.trim().slice(0, MAX_DESC_LEN);

    state.worlds.push({
        id: state.nextId++,
        name,
        desc,
    });

    showToast('Мир «' + name + '» успешно создан');
    renderWorlds();
    showScreen('worlds');
});

// ============ ПЕРЕИМЕНОВАНИЕ ============
const inputRename = document.getElementById('input-rename');
const counterRename = document.getElementById('counter-rename');
const screenRename = document.getElementById('screen-rename');

function openRename(id) {
    const world = state.worlds.find(w => w.id === id);
    if (!world) return;
    state.renameId = id;
    inputRename.value = world.name;
    counterRename.textContent = `${world.name.length} / ${MAX_NAME_LEN}`;
    counterRename.classList.remove('limit');
    showScreen('rename');
    setTimeout(() => { inputRename.focus(); inputRename.select(); }, 150);
}

inputRename.addEventListener('input', () => {
    const len = inputRename.value.length;
    counterRename.textContent = `${len} / ${MAX_NAME_LEN}`;
    counterRename.classList.toggle('limit', len >= MAX_NAME_LEN);
});

document.getElementById('rename-back').addEventListener('click', () => {
    state.renameId = null;
    renderWorlds();
    showScreen('worlds');
});

document.getElementById('finish-rename').addEventListener('click', () => {
    const world = state.worlds.find(w => w.id === state.renameId);
    if (!world) { showScreen('worlds'); return; }
    const newName = (inputRename.value.trim() || world.name).slice(0, MAX_NAME_LEN);
    world.name = newName;
    state.renameId = null;
    showToast('Мир переименован');
    renderWorlds();
    showScreen('worlds');
});

// ============ ENTER = как "далее"/"создать" ============
inputName.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') document.getElementById('next-to-desc').click();
});
inputDesc.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        document.getElementById('finish-create').click();
    }
});
inputRename.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') document.getElementById('finish-rename').click();
});

// ============ ИНИЦИАЛИЗАЦИЯ ============
renderWorlds();
