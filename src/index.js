const burger = document.getElementById('burger');

function showMenu(){
    burger.classList.remove('opacity-0', 'h-0', 'w-0');
    burger.classList.add('opacity-85', 'w-full', 'h-full');
}

function hideMenu(){
    burger.classList.remove('opacity-85', 'w-full', 'h-full');
    burger.classList.add('opacity-0', 'h-0', 'w-0');
}

