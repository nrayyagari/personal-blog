document.addEventListener('DOMContentLoaded', () => {
    // Find all <pre><code> blocks
    document.querySelectorAll('pre > code').forEach((codeBlock) => {
      const wrapper = codeBlock.parentNode;
  
      // Create copy button (using a clipboard icon as text)
      const copyBtn = document.createElement('button');
      copyBtn.className = 'copy-btn';
      copyBtn.innerHTML = '📋';  // Clipboard Unicode icon
  
      // When clicked, copy text inside <code> to clipboard
      copyBtn.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(codeBlock.innerText);
          copyBtn.innerHTML = 'Copied!';   // Temporary success text
          setTimeout(() => {
            copyBtn.innerHTML = '📋';      // Revert to icon
          }, 2000);
        } catch (err) {
          console.error('Failed to copy text: ', err);
        }
      });
  
      // Position the button in the same spot
      wrapper.style.position = 'relative';
      wrapper.appendChild(copyBtn);
    });
  });
  