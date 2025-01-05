document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.menu-toggle');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const targetList = document.getElementById(targetId);
            const parentCategory = button.closest('.menu-category');
            parentCategory.querySelectorAll('.menu-list').forEach(list => {
                list.classList.add('hidden');
            });
            targetList.classList.remove('hidden');
        });
    });
});
