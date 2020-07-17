const showShare = document.querySelector('#show-share');
const footerActive = document.querySelector('.footer-active');
const articleFooter = document.querySelector('.article-footer');

function showFooterActive() {
  let elementClasses = footerActive.classList;
  let classToAdd = elementClasses.toggle('show-footer-active');
  if (classToAdd) {
    articleFooter.classList.add('hide-article-footer');
    footerActive.classList.add('show-footer-active');
    showShare.classList.add('btn-show-share-bg-alt');
    if (window.matchMedia('(max-width: 1199px)').matches) {
      footerActive.appendChild(showShare);
    } else {
      articleFooter.classList.remove('hide-article-footer');
    }
  } else {
    footerActive.classList.remove('show-footer-active');
    articleFooter.classList.remove('hide-article-footer');
    showShare.classList.remove('btn-show-share-bg-alt');
    articleFooter.appendChild(showShare);
  }
}

showShare.addEventListener('click', showFooterActive);