// 移动端菜单切换
document.querySelector('.menu-btn').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        navbar.style.backgroundColor = '#ffffff';
    }
});

function copyCode(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('提取码已复制到剪贴板！');
    }).catch(err => {
        console.error('复制失败：', err);
    });
}

function sendMessage(event) {
    event.preventDefault();
    
    const contact = document.getElementById('contact').value;
    const message = document.getElementById('message').value;
    
    // 这里需要配置邮件发送服务
    // 可以使用 EmailJS 或其他邮件服务
    // 以下是使用 EmailJS 的示例代码
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        to_email: "18300677868@163.com",
        from_contact: contact,
        message: message
    }).then(
        function(response) {
            alert("留言已发送！我们会尽快回复您。");
            document.getElementById('messageForm').reset();
        },
        function(error) {
            alert("发送失败，请稍后重试或直接通过微信联系我们。");
        }
    );
}