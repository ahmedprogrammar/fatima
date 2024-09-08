document.addEventListener("DOMContentLoaded", function() {
    const currentContent = document.getElementById('content1');
    const nextContent = document.getElementById('content2');

    setTimeout(() => {
        currentContent.classList.remove('active');
        nextContent.classList.add('active');
    }, 3000);

    // مثال على إضافة تأثير تفاعلي مع الماوس
    document.addEventListener('mousemove', (event) => {
        const x = event.clientX / window.innerWidth;
        const y = event.clientY / window.innerHeight;
        document.getElementById('scene').style.transform = `rotateX(${y * 10 - 5}deg) rotateY(${x * 10 - 5}deg)`;
    });
});
