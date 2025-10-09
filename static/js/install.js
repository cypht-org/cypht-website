// Install Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Copy code functionality
    window.copyCode = function(button) {
        const codeBlock = button.closest('.code-block').querySelector('code');
        const text = codeBlock.textContent;
        
        navigator.clipboard.writeText(text).then(function() {
            // Update button text temporarily
            const originalContent = button.innerHTML;
            button.innerHTML = '<i class="bi bi-check"></i>';
            button.style.background = 'var(--color-success)';
            button.style.borderColor = 'var(--color-success)';
            
            setTimeout(function() {
                button.innerHTML = originalContent;
                button.style.background = '';
                button.style.borderColor = '';
            }, 2000);
        }).catch(function(err) {
            console.error('Failed to copy: ', err);
        });
    };
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.install-method-card, .step-item');
    animatedElements.forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
    
    // Terminal typing animation
    function initTerminalAnimation() {
        const terminalBody = document.querySelector('.terminal-body');
        if (!terminalBody) return;
        
        const lines = terminalBody.querySelectorAll('.terminal-line');
        let isAnimating = false;
        
        function resetTerminal() {
            lines.forEach(line => {
                line.style.opacity = '0';
                line.style.transform = 'translateX(-20px)';
                const command = line.querySelector('.terminal-command');
                if (command) {
                    command.style.borderRight = 'none';
                }
            });
        }
        
        function showNextLine() {
            if (isAnimating) return;
            isAnimating = true;
            
            let currentLine = 0;
            
            function animateLine() {
                if (currentLine < lines.length) {
                    const line = lines[currentLine];
                    const command = line.querySelector('.terminal-command');
                    
                    // Show the line
                    line.style.opacity = '1';
                    line.style.transform = 'translateX(0)';
                    
                    if (command && command.classList.contains('typing-animation')) {
                        // Animate typing for command lines
                        const text = command.textContent;
                        command.textContent = '';
                        command.style.borderRight = '2px solid var(--color-primary)';
                        
                        let i = 0;
                        function typeChar() {
                            if (i < text.length) {
                                command.textContent += text.charAt(i);
                                i++;
                                setTimeout(typeChar, Math.random() * 50 + 30); // Random typing speed
                            } else {
                                // Remove cursor after typing is complete
                                setTimeout(() => {
                                    command.style.borderRight = 'none';
                                    currentLine++;
                                    setTimeout(animateLine, 800);
                                }, 1000);
                            }
                        }
                        
                        // Start typing after a short delay
                        setTimeout(typeChar, 300);
                    } else {
                        // Show output lines immediately
                        currentLine++;
                        setTimeout(animateLine, 1200);
                    }
                } else {
                    // Animation complete, restart after delay
                    isAnimating = false;
                    setTimeout(() => {
                        resetTerminal();
                        setTimeout(showNextLine, 2000);
                    }, 4000);
                }
            }
            
            animateLine();
        }
        
        // Start animation when terminal is visible
        const terminalObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(showNextLine, 1000);
                    terminalObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        terminalObserver.observe(terminalBody);
    }
    
    // Initialize terminal animation
    initTerminalAnimation();
    
    // Add hover effects to method cards
    const methodCards = document.querySelectorAll('.install-method-card');
    methodCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = 'var(--shadow-2xl)';
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('featured-method')) {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = 'var(--shadow-md)';
            } else {
                this.style.transform = 'scale(1.02) translateY(-4px)';
                this.style.boxShadow = 'var(--shadow-2xl)';
            }
        });
    });
    
    // Add parallax effect to floating elements
    const floatingElements = document.querySelectorAll('.floating-element');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        floatingElements.forEach((element, index) => {
            const speed = 0.2 + (index * 0.1);
            element.style.transform = `translateY(${rate * speed}px)`;
        });
    });
    
    // Add progress indicator for installation steps
    const steps = document.querySelectorAll('.step-item');
    const progressObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const stepNumber = entry.target.querySelector('.step-number');
                stepNumber.style.background = 'linear-gradient(135deg, var(--color-success), var(--color-success))';
                stepNumber.style.transform = 'scale(1.1)';
                
                setTimeout(() => {
                    stepNumber.style.transform = 'scale(1)';
                }, 300);
            }
        });
    }, { threshold: 0.7 });
    
    steps.forEach(step => {
        progressObserver.observe(step);
    });
});

// Add CSS for additional animations
const additionalCSS = `
.animate-in {
    animation-play-state: running !important;
}

.install-method-card:hover .method-icon {
    transform: scale(1.1);
    transition: transform 0.3s ease;
}

.step-number {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

@media (prefers-reduced-motion: reduce) {
    .install-method-card,
    .step-item,
    .floating-element,
    .typing-animation {
        animation: none !important;
    }
    
    .install-method-card:hover,
    .step-number {
        transform: none !important;
    }
}
`;

// Inject additional CSS
const style = document.createElement('style');
style.textContent = additionalCSS;
document.head.appendChild(style);
