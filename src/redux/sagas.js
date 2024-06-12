import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_NEWS_REQUEST, fetchNewsSuccess, fetchNewsFailure } from './newsAction';

function* fetchNewsSaga() {
    try {
        const response = yield call(fetch, 'https://newsapi.org/v2/top-headlines?country=in&apiKey=e58115446a8f44e782bae4eb44f448f6');
        const data = yield response.json();
        const news = data.articles.map((article) => ({
            title: article.title,
            url: article.url,
            description: article.description
        }));
        yield put(fetchNewsSuccess(news));
    } catch (error) {
        yield put(fetchNewsFailure(error.message));
    }
}

function* watchFetchNews() {
    yield takeEvery(FETCH_NEWS_REQUEST, fetchNewsSaga);
}

export default watchFetchNews;
