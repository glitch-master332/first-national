function toggleSidebar(){
    const sb=document.getElementById('sidebar');
    const cont=document.querySelector('.dashboard-container');
    sb.classList.toggle('collapsed');
    cont.classList.toggle('shifted');
}
function toggleDarkMode(){document.body.classList.toggle('dark');}
function login(){window.location.href='dashboard.html';}
function logout(){window.location.href='index.html';}