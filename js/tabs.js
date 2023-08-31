function openAuthor(tabname) {
  var tabActive = document.getElementById(tabname);
  var tabcontent = document.querySelectorAll('.author');

  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove('author--active');
  }
  tabActive.classList.add('author--active');
}
