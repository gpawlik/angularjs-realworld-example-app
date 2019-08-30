import angular from 'angular';
import { react2angular } from 'react2angular';

import ArticleConfig from './article.config';
import ArticleCtrl from './article.controller';
import { Article } from './article';

// Create the module where our functionality can attach to
const articleModule = angular.module('app.article', []);

// Include our UI-Router config settings
articleModule.config(ArticleConfig);

// Controllers
articleModule.controller('ArticleCtrl', ArticleCtrl);

// Components
articleModule.component('article', react2angular(Article, ['article'], ['User', 'Profile', 'Comments', 'Articles', '$state']));

export default articleModule;
