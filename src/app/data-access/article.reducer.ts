import {createReducer, on} from '@ngrx/store';
import {loadArticles, loadArticlesSuccess, reset} from './article.actions';
import {Article} from "../shared/article.type";
import {state} from "@angular/animations";

export const data: Array<Article> = [
  {
    id: 'I22001',
    title: 'HEART',
    coverUrl: 'https://i.pinimg.com/736x/1f/b2/db/1fb2db770c7e6c31d780ee44b4941d6e.jpg',
    keywords: ['music', 'video'],
    artists: ['ily_bo', 'nelson arthur'],
    description: 'This is a dummy text that will later be replaced with some nice words!',
    references: ['some/url/to/the/reference'],
    dates: {
      startDate: '21-11-22',
      endDate: null,
    },
    assets: {
      pictureUrls: [],
      videoUrls: [],
    }
  },
  {
    id: 'I22001',
    title: 'HEART',
    coverUrl: 'https://i.pinimg.com/736x/1f/b2/db/1fb2db770c7e6c31d780ee44b4941d6e.jpg',
    keywords: ['music', 'video'],
    artists: ['ily_bo', 'nelson arthur'],
    description: 'This is a dummy text that will later be replaced with some nice words!',
    references: ['some/url/to/the/reference'],
    dates: {
      startDate: '21-11-22',
      endDate: null,
    },
    assets: {
      pictureUrls: [],
      videoUrls: [],
    }
  },
  {
    id: 'I22001',
    title: 'HEART',
    coverUrl: 'https://i.pinimg.com/736x/1f/b2/db/1fb2db770c7e6c31d780ee44b4941d6e.jpg',
    keywords: ['music', 'video'],
    artists: ['ily_bo', 'nelson arthur'],
    description: 'This is a dummy text that will later be replaced with some nice words!',
    references: ['some/url/to/the/reference'],
    dates: {
      startDate: '21-11-22',
      endDate: null,
    },
    assets: {
      pictureUrls: [],
      videoUrls: [],
    }
  },
  {
    id: 'I22001',
    title: 'HEART',
    coverUrl: 'https://i.pinimg.com/736x/1f/b2/db/1fb2db770c7e6c31d780ee44b4941d6e.jpg',
    keywords: ['music', 'video'],
    artists: ['ily_bo', 'nelson arthur'],
    description: 'This is a dummy text that will later be replaced with some nice words!',
    references: ['some/url/to/the/reference'],
    dates: {
      startDate: '21-11-22',
      endDate: null,
    },
    assets: {
      pictureUrls: [],
      videoUrls: [],
    }
  }
]

export interface state {
  articles: Array<Article>;
  filterOptions: Set<string>
}

export const initialState: state = {
  articles: [],
  filterOptions: new Set() //TODO doesnt seem right
};

export const articleReducer = createReducer(
  initialState,
  on(loadArticlesSuccess, (state, {articles}) => ({
    ...state,
    articles: articles,
    filterOptions: new Set(articles.map((it) => it.keywords).flat())
  })),
  on(reset, (state) => ({...state, articles: []}))
);
