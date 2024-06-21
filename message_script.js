document.addEventListener('DOMContentLoaded', function() {  
    document.getElementById('registerBtn').addEventListener('click', function() {  
        var phone = document.querySelector('.phone').value;  
        var name = document.querySelector('.name').value;  
        var password = document.querySelector('.password').value;  
        var repassword = document.querySelector('.repassword').value;  
        var email = document.querySelector('.email').value;  
  
        if (phone && name && password && repassword && email) {  
            window.location.href = 'login.html';  
        } else {  
            alert('请确保所有字段都已填写！');  
        }  
    });  
});