class ArticleCtrl {
  constructor(article, User, $sce, $rootScope) {
    'ngInject';

    this.article = article;
    this.currentUser = User.current;

    $rootScope.setPageTitle(this.article.title);
  }
}


export default ArticleCtrl;
