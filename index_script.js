window.onload = function() {  
    checkLoginStatus();  
};  
  
function checkLoginStatus() {  
    var urlParams = new URLSearchParams(window.location.search);  
    var loginStatus = urlParams.get('login');  
      
    if (loginStatus === 'success') {  
        showLoginSuccessModal();  
    }  
}  
  
function showLoginSuccessModal() {  
    var modal = document.getElementById("loginSuccessModal");  
    modal.style.display = "block";  
}  
  
// 关闭模态窗口的函数  
function closeModal() {  
    var modal = document.getElementById("loginSuccessModal");  
    modal.style.display = "none";  
}  
  
// 获取模态窗口中的关闭按钮并添加事件监听器  
var closeButton = document.querySelector("#loginSuccessModal .close");  
closeButton.addEventListener('click', closeModal);  
  
// 当用户点击模态窗口以外的区域时关闭它  
window.addEventListener('click', function(event) {  
    if (event.target === document.getElementById("loginSuccessModal")) {  
        closeModal();  
    }  
});

