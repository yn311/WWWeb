document.addEventListener('DOMContentLoaded', function() {    
    var videoPlayer = document.querySelector('.video-player');    
  
    if (videoPlayer) {    
        // 添加鼠标hover样式为pointer    
        videoPlayer.addEventListener('mouseover', function() {    
            this.style.cursor = 'pointer';    
        });    
  
        // 当鼠标离开时，恢复默认样式    
        videoPlayer.addEventListener('mouseout', function() {    
            this.style.cursor = '';    
        });    
    }    
});