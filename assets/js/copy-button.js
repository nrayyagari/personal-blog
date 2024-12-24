document.addEventListener('DOMContentLoaded', function() {
    // Add copy button to each code block
    document.querySelectorAll('pre').forEach(function(pre) {
        // Skip if already has a copy button
        if (pre.querySelector('.copy-button')) return;
        
        // Create button
        var button = document.createElement('button');
        button.className = 'copy-button';
        button.textContent = 'Copy';
        
        // Add click handler
        button.addEventListener('click', function() {
            // Get the text content
            var code = pre.querySelector('code') || pre;
            var text = code.innerText;
            
            // Copy to clipboard
            navigator.clipboard.writeText(text).then(function() {
                button.textContent = 'Copied!';
                button.classList.add('success');
                
                setTimeout(function() {
                    button.textContent = 'Copy';
                    button.classList.remove('success');
                }, 2000);
            }).catch(function(err) {
                button.textContent = 'Error!';
                console.error('Failed to copy:', err);
            });
        });
        
        // Add button to pre element
        pre.style.position = 'relative';
        pre.appendChild(button);
    });
});
