const elements = document.querySelectorAll('.video');

        window.addEventListener('scroll', () => {
            const triggerPoint = window.innerHeight / 1.2; // Adjust trigger point for animations
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                if (elementTop < triggerPoint) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        });

        // Initially trigger the animation for all videos
        window.addEventListener('load', () => {
            elements.forEach(element => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            });
        });

        // Filter videos by category
        function filterVideos(category) {
            const videos = document.querySelectorAll('.video');
            videos.forEach(video => {
                if (category === 'all' || video.classList.contains(category)) {
                    video.style.display = 'block';
                } else {
                    video.style.display = 'none';
                }
            });
        }
