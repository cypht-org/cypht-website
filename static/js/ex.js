document.addEventListener('DOMContentLoaded', function() {
    const PEERTUBE_INSTANCE = 'https://videos.evoludata.com';
    const CHANNEL_NAME = 'cypht_monthly_meetings';
    const VIDEOS_PER_PAGE = 6;

    let currentPage = 1;
    let totalPages = 1;
    let isLoading = false;

    // Function to fetch videos from PeerTube API
    async function fetchVideos(page = 1) {
        try {
            isLoading = true;
            showLoading();

            console.log(`Fetching videos from Cypht community channel: ${PEERTUBE_INSTANCE}/api/v1/video-channels/${CHANNEL_NAME}/videos`);

            // Construct API URL for channel videos only
            const params = new URLSearchParams({
                start: (page - 1) * VIDEOS_PER_PAGE,
                count: VIDEOS_PER_PAGE,
                sort: '-publishedAt'
            });

            const apiUrl = `${PEERTUBE_INSTANCE}/api/v1/video-channels/${CHANNEL_NAME}/videos?${params.toString()}`;
            console.log('Final API URL:', apiUrl);

            const response = await fetch(apiUrl, {
                headers: {
                    'Accept': 'application/json'
                }
            });

            console.log('Response status:', response.status);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Response data:', data);
            console.log('Total videos:', data.total);

            return data;
        } catch (error) {
            console.error('Error fetching videos:', error);
            console.error('Error message:', error.message);
            console.error('Error stack:', error.stack);

            // Show error to user instead of hiding it
            showError(error.message || 'Failed to fetch videos');
            return null;
        } finally {
            isLoading = false;
        }
    }

    // Function to display videos
    function displayVideos(videos) {
        const container = document.getElementById('old-events-container');
        if (!container) return;

        if (!videos || videos.data.length === 0) {
            container.innerHTML = `
                <div class="no-events">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M18 11c0 .959-.683 1.75-1.576 1.928A3.995 3.995 0 0 1 14 15c0 .959-.683 1.75-1.576 1.928A3.995 3.995 0 0 1 10 19c-2.206 0-4-1.794-4-4s1.794-4 4-4c.959 0 1.75.683 1.928 1.576A3.995 3.995 0 0 1 14 11c2.206 0 4 1.794 4 4M6 19v2H4v-2h2m0-2v-2H4v2h2m0-4v-2H4v2h2m0-4V7H4v2h2m0-4V3H4v2h2m2 0V3h2v2H8m4 0V3h2v2h-2m4 0V3h2v2h-2m4 0v2h2V3h-2m0 4v2h2V7h-2m0 4v2h2v-2h-2m0 4v2h2v-2h-2m0 4v2h2v-2h-2"/>
                    </svg>
                    <h3>No events found</h3>
                    <p>There are no past events available at the moment.</p>
                </div>
            `;
            return;
        }

        container.innerHTML = videos.data.map(video => {
            // Construct thumbnail URL
            let thumbnailUrl = '';
            if (video.thumbnailPath) {
                thumbnailUrl = video.thumbnailPath.startsWith('http')
                    ? video.thumbnailPath
                    : PEERTUBE_INSTANCE + video.thumbnailPath;
            }

            // Construct watch URL
            const watchUrl = video.embedUrl ||
                            video.url ||
                            `${PEERTUBE_INSTANCE}/videos/watch/${video.uuid || video.shortUUID || video.id}`;

            // Get channel/account name
            const channelName = video.channel
                ? (video.channel.displayName || video.channel.name)
                : (video.account
                    ? (video.account.displayName || video.account.name)
                    : CHANNEL_NAME);

            return `
                <div class="event-card">
                    <div class="event-card-image">
                        <img
                            src="${thumbnailUrl}"
                            alt="${escapeHtml(video.name)}"
                            loading="lazy"
                            onerror="this.src='https://via.placeholder.com/320x180/2a2a2a/ffffff?text=${encodeURIComponent(video.name.substring(0, 20))}'"
                        >
                        ${video.duration ? `<div class="event-card-duration">${formatDuration(video.duration)}</div>` : ''}
                        <div class="event-card-play">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M8 5.14v14l11-7l-11-7Z"/>
                            </svg>
                        </div>
                    </div>
                    <div class="event-card-content">
                        <div class="event-card-channel">${escapeHtml(channelName)}</div>
                        <h3 class="event-card-title">${escapeHtml(video.name)}</h3>
                        ${video.description ? `<p class="event-card-description">${truncateText(escapeHtml(video.description), 100)}</p>` : ''}
                        <div class="event-card-meta">
                            <div class="event-card-date">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M9 1v2h6V1h2v2h4a2 2 0 0 1 2 2v14c0 1.1-.9 2-2 2H3a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h4V1h2zm10 10H5v8h14v-8zm0-6H5v4h14V5z"/>
                                </svg>
                                ${video.publishedAt ? formatDate(video.publishedAt) : 'Date not available'}
                            </div>
                            ${video.views ? `
                            <div class="event-card-views">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M12 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0 8a5 5 0 1 1 0-10a5 5 0 0 1 0 10m0-12.5c-5 0-9.27 3.11-11 7.5c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"/>
                                </svg>
                                ${formatViews(video.views)}
                            </div>
                            ` : ''}
                        </div>
                        <a href="${watchUrl}"
                           class="event-card-button"
                           target="_blank"
                           rel="noopener noreferrer">
                            Watch Now
                        </a>
                    </div>
                </div>
            `;
        }).join('');

        // Update pagination if we have total count
        if (videos.total !== undefined) {
            updatePagination(videos.total, page);
        } else {
            document.querySelector('.old-events-pagination').innerHTML = '';
        }
    }

    // ... rest of the helper functions remain the same ...
    // Function to update pagination
    function updatePagination(totalVideos, currentPage) {
        const paginationContainer = document.querySelector('.old-events-pagination');
        if (!paginationContainer) return;

        totalPages = Math.ceil(totalVideos / VIDEOS_PER_PAGE);

        if (totalPages <= 1) {
            paginationContainer.innerHTML = '';
            return;
        }

        let paginationHTML = '';

        // Previous button
        paginationHTML += `
            <button class="pagination-button ${currentPage === 1 ? 'disabled' : ''}"
                    onclick="changePage(${currentPage - 1})"
                    ${currentPage === 1 ? 'disabled' : ''}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path fill="currentColor" d="m12.7 15.3l-2.9-2.9q-.3-.3-.3-.7t.3-.7l2.85-2.85q.275-.275.7-.275t.7.275q.3.3.3.713t-.3.712L11.825 12l1.875 1.875q.275.275.275.688t-.275.712q-.3.3-.712.3t-.713-.3Z"/>
                </svg>
                Previous
            </button>
        `;

        // Page numbers
        const maxVisiblePages = 5;
        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            paginationHTML += `
                <button class="pagination-button ${i === currentPage ? 'active' : ''}"
                        onclick="changePage(${i})">
                    ${i}
                </button>
            `;
        }

        // Next button
        paginationHTML += `
            <button class="pagination-button ${currentPage === totalPages ? 'disabled' : ''}"
                    onclick="changePage(${currentPage + 1})"
                    ${currentPage === totalPages ? 'disabled' : ''}>
                Next
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M11.3 15.3q-.275-.275-.275-.7t.275-.7L13.175 12L11.3 10.125q-.275-.275-.275-.688t.275-.712q.3-.3.713-.3t.712.3l2.9 2.9q.275.275.275.7t-.275.7l-2.9 2.9q-.275.275-.687.275t-.713-.275Z"/>
                </svg>
            </button>
        `;

        paginationContainer.innerHTML = paginationHTML;
    }

    // Function to change page
    window.changePage = async function(page) {
        if (page < 1 || page > totalPages || isLoading) return;

        currentPage = page;
        const videos = await fetchVideos(page);
        if (videos) {
            displayVideos(videos);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    // Helper functions
    function formatDuration(seconds) {
        if (!seconds) return '00:00';
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = Math.floor(seconds % 60);

        if (hours > 0) {
            return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }
        return `${minutes}:${secs.toString().padStart(2, '0')}`;
    }

    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    }

    function formatViews(views) {
        if (views >= 1000000) {
            return (views / 1000000).toFixed(1) + 'M';
        }
        if (views >= 1000) {
            return (views / 1000).toFixed(1) + 'K';
        }
        return views;
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    function truncateText(text, maxLength) {
        if (!text) return '';
        if (text.length <= maxLength) return text;
        return text.substr(0, maxLength) + '...';
    }

    function showLoading() {
        const container = document.getElementById('old-events-container');
        if (container) {
            container.innerHTML = `
                <div class="loading-spinner">
                    <div class="spinner"></div>
                    <p>Loading events...</p>
                </div>
            `;
        }
    }

    function hideLoading() {
        // Loading is hidden when content is rendered
    }

    function showError(message) {
        const container = document.getElementById('old-events-container');
        if (container) {
            container.innerHTML = `
                <div class="error-message">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 17q.425 0 .713-.288T13 16q0-.425-.288-.712T12 15q-.425 0-.712.288T11 16q0 .425.288.713T12 17Zm0-4q.425 0 .713-.288T13 12V8q0-.425-.288-.712T12 7q-.425 0-.712.288T11 8v4q0 .425.288.713T12 13Zm0 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/>
                    </svg>
                    <h3>Error Loading Events</h3>
                    <p>${message}</p>
                    <div class="debug-info" style="margin-top: 1rem; font-size: 0.9rem; color: #888;">
                        <p>Debug Info:</p>
                        <p>Instance: ${PEERTUBE_INSTANCE}</p>
                        <p>Channel: ${CHANNEL_NAME}</p>
                    </div>
                    <button onclick="loadEvents()" class="retry-button">Retry</button>
                </div>
            `;
        }
    }

    window.loadEvents = async function() {
        const videos = await fetchVideos(currentPage);
        if (videos) {
            displayVideos(videos);
        } else {
            console.error('Failed to load videos');
        }
    };

    // Initialize
    loadEvents();
});