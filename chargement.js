document.addEventListener("DOMContentLoaded", () => {
    const loader = document.querySelector('.loader');
    
    if (!sessionStorage.getItem('loaderShown')) {
        
        if (loader) {
            setTimeout(() => {
                loader.classList.add('hidden'); 
                sessionStorage.setItem('loaderShown', 'true');
            }, 2000);
        }
    } else {
        
        if (loader) {
            loader.classList.add('hidden');
        }
    }
});
