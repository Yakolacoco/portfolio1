const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    setTimeout(() => {
        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;
    }, 50); 
});

document.addEventListener('click', () => {
    cursor.classList.add('shrinking'); 

    setTimeout(() => {
        cursor.classList.remove('shrinking'); 
    }, 200); 
});
