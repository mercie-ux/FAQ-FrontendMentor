document.querySelectorAll('.accordion h3').forEach((header) => {
    header.addEventListener('click', () => {
        const parent = header.parentElement;
        const paragraph = parent.querySelector('p');
        const icon = header.querySelector('.icon'); // Updated to match the class

        // Ensure both paragraph and icon exist
        if (!paragraph || !icon) {
            console.error('No paragraph or icon found', header);
            return;
        }

        // Toggle the paragraph display
        if (paragraph.style.display === 'block') {
            paragraph.style.display = 'none';
            icon.textContent = '+'; // Collapse icon
        } else {
            paragraph.style.display = 'block';
            icon.textContent = '-'; // Expand icon
        }
    });
});
