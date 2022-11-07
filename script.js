const notifications = document.querySelectorAll('#notification-js')
const notifAmount = document.getElementById('notif-num-js')
const markBtn = document.getElementById('js-mark')
const notifCount = document.querySelectorAll('.unread');


notifications.forEach((notification => {
    notification.addEventListener('click', () => {
        notification.classList.remove('unread');
        const notifCount = document.querySelectorAll('.unread');
        notifAmount.innerHTML = notifCount.length;
    })

}))

markBtn.addEventListener('click', () => {
    notifCount.forEach((unread) => {
        unread.classList.remove('unread')
        const notifCount = document.querySelectorAll('.unread');
        notifAmount.innerHTML = notifCount.length;
    })
})


notifAmount.innerHTML = `${notifCount.length}`;
if(notifCount.length === 0){
    notifAmount.innerHTML = ``
    notifAmount.style.display = 'none'
}


