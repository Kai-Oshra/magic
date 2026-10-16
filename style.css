* { margin: 0; padding: 0; box-sizing: border-box; }

html, body {
    height: 100%;
    overflow: hidden;
    font-family: 'Georgia', 'Times New Roman', serif;
    background: #05060d;
    color: #d8e0ff;
}

body {
    background:
        radial-gradient(ellipse at 20% 10%, #1a0f3a 0%, transparent 55%),
        radial-gradient(ellipse at 80% 90%, #0d1f3a 0%, transparent 55%),
        radial-gradient(ellipse at 50% 50%, #0a0a1e 0%, #03040a 100%);
    position: relative;
}

/* --- Звёзды --- */
.bg-stars {
    position: fixed; inset: 0;
    background-image:
        radial-gradient(1px 1px at 20% 30%, #ffffff, transparent),
        radial-gradient(1px 1px at 70% 15%, #a0c4ff, transparent),
        radial-gradient(1px 1px at 40% 70%, #ffffff, transparent),
        radial-gradient(1px 1px at 85% 60%, #c9a8ff, transparent),
        radial-gradient(1px 1px at 15% 85%, #ffffff, transparent),
        radial-gradient(1px 1px at 55% 45%, #8fb3ff, transparent),
        radial-gradient(1px 1px at 90% 25%, #ffffff, transparent),
        radial-gradient(1px 1px at 10% 50%, #d0c0ff, transparent);
    opacity: 0.7;
    animation: twinkle 6s ease-in-out infinite alternate;
    pointer-events: none;
}
@keyframes twinkle {
    0%   { opacity: 0.4; }
    100% { opacity: 0.9; }
}

/* --- Свечения --- */
.bg-glow {
    position: fixed;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
    opacity: 0.55;
}
.bg-glow-1 { width: 500px; height: 500px; background: #6a3aff; top: -150px; left: -150px; animation: float1 14s ease-in-out infinite; }
.bg-glow-2 { width: 450px; height: 450px; background: #2a8fff; bottom: -150px; right: -150px; animation: float2 18s ease-in-out infinite; }
.bg-glow-3 {
    width: 350px; height: 350px; background: #b03aff;
    top: 50%; left: 50%; transform: translate(-50%, -50%);
    opacity: 0.25; animation: float3 22s ease-in-out infinite;
}
@keyframes float1 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50%      { transform: translate(80px, 60px) scale(1.15); }
}
@keyframes float2 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50%      { transform: translate(-70px, -50px) scale(1.1); }
}
@keyframes float3 {
    0%, 100% { transform: translate(-50%, -50%) scale(1); }
    50%      { transform: translate(-45%, -55%) scale(1.2); }
}

#particles {
    position: fixed; inset: 0;
    pointer-events: none;
    opacity: 0.6;
}

/* --- Экраны --- */
.screen {
    position: relative;
    z-index: 10;
    display: none;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 20px;
}
.screen-active { display: flex; }

/* --- Общие кнопки --- */
.magic-btn {
    position: relative;
    padding: 16px 24px;
    font-family: inherit;
    font-size: 17px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #e0e6ff;
    background: linear-gradient(180deg, rgba(40, 30, 80, 0.7), rgba(20, 15, 50, 0.7));
    border: 1px solid rgba(140, 120, 255, 0.45);
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
    box-shadow: 0 0 0 rgba(140, 100, 255, 0), inset 0 0 20px rgba(120, 80, 255, 0.05);
}
.magic-btn .btn-text { position: relative; z-index: 2; }
.magic-btn .btn-glow {
    position: absolute; inset: 0;
    background: linear-gradient(120deg, transparent 0%, rgba(160, 120, 255, 0.25) 50%, transparent 100%);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
    z-index: 1;
}
.magic-btn:hover {
    color: #ffffff;
    border-color: rgba(180, 150, 255, 0.9);
    box-shadow:
        0 0 20px rgba(140, 100, 255, 0.55),
        0 0 40px rgba(140, 100, 255, 0.25),
        inset 0 0 24px rgba(140, 100, 255, 0.15);
    transform: translateY(-2px);
    letter-spacing: 0.2em;
}
.magic-btn:hover .btn-glow { transform: translateX(100%); }
.magic-btn:active { transform: translateY(0) scale(0.98); }
.magic-btn:focus-visible { outline: 2px solid #b8a8ff; outline-offset: 3px; }

.magic-btn-ghost {
    background: rgba(20, 15, 50, 0.4);
    border-color: rgba(140, 120, 255, 0.25);
    color: #a8b0e0;
}
.magic-btn-ghost:hover { color: #e0e6ff; }

/* ===== МЕНЮ ===== */
.menu-frame {
    position: relative;
    padding: 60px 80px;
    border-radius: 20px;
    background: rgba(10, 12, 30, 0.55);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border: 1px solid rgba(140, 120, 255, 0.35);
    box-shadow:
        0 0 40px rgba(120, 80, 255, 0.25),
        0 0 80px rgba(60, 40, 180, 0.15),
        inset 0 0 40px rgba(120, 80, 255, 0.08);
    text-align: center;
    animation: frame-in 1.2s ease-out both;
}
.menu-frame::before, .menu-frame::after {
    content: '';
    position: absolute;
    width: 28px; height: 28px;
    border: 2px solid #9a7aff;
    opacity: 0.8;
    filter: drop-shadow(0 0 6px #9a7aff);
}
.menu-frame::before { top: -2px; left: -2px; border-right: none; border-bottom: none; border-top-left-radius: 20px; }
.menu-frame::after  { bottom: -2px; right: -2px; border-left: none; border-top: none; border-bottom-right-radius: 20px; }

@keyframes frame-in {
    from { opacity: 0; transform: translateY(20px) scale(0.96); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
}

.menu-title {
    font-size: 64px;
    font-weight: normal;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    background: linear-gradient(180deg, #ffffff 0%, #b8a8ff 60%, #7a5aff 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: 0 0 30px rgba(150, 100, 255, 0.5);
    margin-bottom: 50px;
    animation: title-glow 4s ease-in-out infinite alternate;
}
@keyframes title-glow {
    0%   { filter: drop-shadow(0 0 10px rgba(150, 100, 255, 0.4)); }
    100% { filter: drop-shadow(0 0 24px rgba(150, 100, 255, 0.8)); }
}

.menu-buttons {
    display: flex;
    flex-direction: column;
    gap: 18px;
    width: 280px;
    margin: 0 auto;
}

/* ===== ЭКРАН МИРОВ ===== */
.worlds-frame {
    position: relative;
    width: min(720px, 92vw);
    max-height: 88vh;
    padding: 40px 50px;
    border-radius: 20px;
    background: rgba(10, 12, 30, 0.6);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border: 1px solid rgba(140, 120, 255, 0.35);
    box-shadow:
        0 0 40px rgba(120, 80, 255, 0.25),
        0 0 80px rgba(60, 40, 180, 0.15),
        inset 0 0 40px rgba(120, 80, 255, 0.08);
    display: flex;
    flex-direction: column;
    animation: frame-in 0.8s ease-out both;
}
.worlds-frame::before, .worlds-frame::after {
    content: '';
    position: absolute;
    width: 28px; height: 28px;
    border: 2px solid #9a7aff;
    opacity: 0.8;
    filter: drop-shadow(0 0 6px #9a7aff);
}
.worlds-frame::before { top: -2px; left: -2px; border-right: none; border-bottom: none; border-top-left-radius: 20px; }
.worlds-frame::after  { bottom: -2px; right: -2px; border-left: none; border-top: none; border-bottom-right-radius: 20px; }

.screen-title {
    font-size: 34px;
    font-weight: normal;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    background: linear-gradient(180deg, #ffffff 0%, #b8a8ff 70%, #7a5aff 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-align: center;
    margin-bottom: 28px;
    filter: drop-shadow(0 0 12px rgba(150, 100, 255, 0.5));
}

.worlds-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    overflow-y: auto;
    padding: 4px 6px 4px 4px;
    margin-bottom: 18px;
    max-height: 55vh;
    scrollbar-width: thin;
    scrollbar-color: rgba(140, 120, 255, 0.4) transparent;
}
.worlds-list::-webkit-scrollbar { width: 6px; }
.worlds-list::-webkit-scrollbar-thumb {
    background: rgba(140, 120, 255, 0.4);
    border-radius: 3px;
}

.world-row {
    position: relative;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 14px 18px;
    background: linear-gradient(180deg, rgba(40, 30, 80, 0.55), rgba(20, 15, 50, 0.55));
    border: 1px solid rgba(140, 120, 255, 0.3);
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
    text-align: left;
}
.world-row:hover {
    border-color: rgba(180, 150, 255, 0.85);
    box-shadow:
        0 0 18px rgba(140, 100, 255, 0.4),
        inset 0 0 20px rgba(140, 100, 255, 0.1);
    transform: translateX(4px);
}
.world-row-info { flex: 1; min-width: 0; }
.world-row-name {
    font-size: 19px;
    color: #e0e6ff;
    letter-spacing: 0.05em;
    margin-bottom: 3px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.world-row-desc {
    font-size: 13px;
    color: #7a80a8;
    letter-spacing: 0.03em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.world-row-desc.empty {
    color: #4a4f6a;
    font-style: italic;
}
.world-row-actions {
    display: flex;
    gap: 8px;
    opacity: 0.6;
    transition: opacity 0.3s;
}
.world-row:hover .world-row-actions { opacity: 1; }

.icon-btn {
    width: 34px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(60, 40, 120, 0.5);
    border: 1px solid rgba(140, 120, 255, 0.4);
    border-radius: 8px;
    color: #c0c8ff;
    cursor: pointer;
    transition: all 0.25s ease;
}
.icon-btn:hover {
    background: rgba(90, 60, 170, 0.7);
    border-color: rgba(180, 150, 255, 0.9);
    color: #ffffff;
    box-shadow: 0 0 12px rgba(140, 100, 255, 0.5);
}

.create-world-btn {
    width: 100%;
    padding: 14px;
    font-size: 15px;
}

/* ===== ЭКРАН СОЗДАНИЯ / ПЕРЕИМЕНОВАНИЯ ===== */
.create-frame {
    position: relative;
    width: min(520px, 92vw);
    padding: 50px 50px 40px;
    border-radius: 20px;
    background: rgba(10, 12, 30, 0.6);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border: 1px solid rgba(140, 120, 255, 0.35);
    box-shadow:
        0 0 40px rgba(120, 80, 255, 0.25),
        0 0 80px rgba(60, 40, 180, 0.15),
        inset 0 0 40px rgba(120, 80, 255, 0.08);
    animation: frame-in 0.8s ease-out both;
}
.create-frame::before, .create-frame::after {
    content: '';
    position: absolute;
    width: 28px; height: 28px;
    border: 2px solid #9a7aff;
    opacity: 0.8;
    filter: drop-shadow(0 0 6px #9a7aff);
}
.create-frame::before { top: -2px; left: -2px; border-right: none; border-bottom: none; border-top-left-radius: 20px; }
.create-frame::after  { bottom: -2px; right: -2px; border-left: none; border-top: none; border-bottom-right-radius: 20px; }

.create-step { animation: step-in 0.4s ease-out both; }
.create-step.hidden { display: none; }

@keyframes step-in {
    from { opacity: 0; transform: translateX(12px); }
    to   { opacity: 1; transform: translateX(0); }
}

.step-hint {
    text-align: center;
    font-size: 12px;
    color: #7a80a8;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-bottom: 22px;
}

.magic-input {
    width: 100%;
    padding: 14px 18px;
    font-family: inherit;
    font-size: 17px;
    color: #e0e6ff;
    background: rgba(20, 15, 50, 0.7);
    border: 1px solid rgba(140, 120, 255, 0.4);
    border-radius: 10px;
    outline: none;
    transition: all 0.3s ease;
    letter-spacing: 0.05em;
}
.magic-input::placeholder { color: #4a4f6a; font-style: italic; }
.magic-input:focus {
    border-color: rgba(180, 150, 255, 0.9);
    box-shadow:
        0 0 15px rgba(140, 100, 255, 0.5),
        inset 0 0 15px rgba(140, 100, 255, 0.1);
    background: rgba(25, 20, 60, 0.8);
}
.magic-textarea {
    resize: none;
    font-size: 15px;
    line-height: 1.5;
    min-height: 80px;
}

.step-counter {
    text-align: right;
    font-size: 12px;
    color: #6a70a0;
    margin-top: 8px;
    letter-spacing: 0.1em;
}
.step-counter.limit { color: #ff7a9a; }

.step-actions {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 30px;
}
.step-actions .magic-btn { width: 100%; padding: 14px; font-size: 15px; }

.back-arrow {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(60, 40, 120, 0.4);
    border: 1px solid rgba(140, 120, 255, 0.4);
    border-radius: 10px;
    color: #c0c8ff;
    cursor: pointer;
    transition: all 0.25s ease;
}
.back-arrow:hover {
    background: rgba(90, 60, 170, 0.7);
    border-color: rgba(180, 150, 255, 0.9);
    color: #ffffff;
    box-shadow: 0 0 12px rgba(140, 100, 255, 0.5);
    transform: translateX(-2px);
}

/* ===== КНОПКА "ГЛАВНАЯ" ===== */
.home-btn {
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 50;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 18px;
    font-family: inherit;
    font-size: 13px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #c0c8ff;
    background: rgba(20, 15, 50, 0.7);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(140, 120, 255, 0.4);
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    opacity: 0;
    pointer-events: none;
    transform: translateY(-10px);
}
.home-btn.visible {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
}
.home-btn:hover {
    color: #ffffff;
    border-color: rgba(180, 150, 255, 0.9);
    box-shadow: 0 0 15px rgba(140, 100, 255, 0.5);
}
.home-btn.hidden { display: none; }

/* ===== ТОСТ ===== */
.toast {
    position: fixed;
    top: 30px;
    left: 50%;
    transform: translateX(-50%) translateY(-30px);
    z-index: 200;
    opacity: 0;
    transition: all 0.45s cubic-bezier(0.22, 1, 0.36, 1);
    pointer-events: none;
}
.toast.visible {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
}
.toast.hidden { display: none; }

.toast-inner {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 28px;
    background: rgba(20, 15, 50, 0.9);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border: 1px solid rgba(180, 150, 255, 0.7);
    border-radius: 12px;
    box-shadow:
        0 0 30px rgba(140, 100, 255, 0.6),
        0 0 60px rgba(140, 100, 255, 0.3);
    color: #e0e6ff;
    font-size: 15px;
    letter-spacing: 0.1em;
}
.toast-icon {
    color: #b8a8ff;
    font-size: 20px;
    filter: drop-shadow(0 0 6px #b8a8ff);
    animation: toast-spin 3s linear infinite;
}
@keyframes toast-spin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
}

/* ===== Адаптив ===== */
@media (max-width: 560px) {
    .menu-frame { padding: 40px 28px; }
    .menu-title { font-size: 42px; margin-bottom: 32px; }
    .menu-buttons { width: 100%; }
    .worlds-frame { padding: 28px 20px; }
    .create-frame { padding: 40px 24px 30px; }
    .screen-title { font-size: 24px; }
    .home-btn span { display: none; }
    .home-btn { padding: 10px; }
}
