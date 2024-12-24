document.addEventListener('DOMContentLoaded', function() {
    const copyIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
    </svg>`;
    
    const checkIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
    </svg>`;

    // Add copy button to each code block
    document.querySelectorAll('pre').forEach(function(pre) {
        // Skip if already has a copy button
        if (pre.querySelector('.copy-button')) return;
        
        // Create button
        var button = document.createElement('button');
        button.className = 'copy-button';
        button.innerHTML = copyIcon;
        button.setAttribute('aria-label', 'Copy code');
        button.setAttribute('title', 'Copy code');
        
        // Add click handler
        button.addEventListener('click', function() {
            // Get the text content
            var code = pre.querySelector('code') || pre;
            var text = code.innerText;
            
            // Copy to clipboard
            navigator.clipboard.writeText(text).then(function() {
                button.innerHTML = checkIcon;
                button.classList.add('success');
                
                setTimeout(function() {
                    button.innerHTML = copyIcon;
                    button.classList.remove('success');
                }, 2000);
            }).catch(function(err) {
                console.error('Failed to copy:', err);
                button.innerHTML = '!';
            });
        });
        
        // Add button to pre element
        pre.style.position = 'relative';
        pre.appendChild(button);
    });
});
