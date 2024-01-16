/*Navigation Dropdownmenu*/

let icon = document.getElementById('dropdownicon');
let menu = document.getElementById('dropdownMenu');

icon.addEventListener('click', function(){
    return menu.style.display = 'flex';
});

function dropdown(){
    return menu.style.display = 'flex';
}