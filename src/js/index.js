/*Navigation Dropdownmenu*/

let icon = document.getElementById('dropdownicon');
let menu = document.getElementById('dropdownMenu');
let closeIcon = document.getElementById('dropdown_close');

function dropdown(){
    icon.style.display = 'none';
    closeIcon.style.display = 'flex';
    return menu.style.display = 'flex';
};

function closeDropdown(){
    closeIcon.style.display = 'none';
    icon.style.display = 'flex';
    return menu.style.display = 'none';
}