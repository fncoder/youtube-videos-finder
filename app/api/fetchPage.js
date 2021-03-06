import {
  fetchVideosRequest,
  fetchVideosSuccess,
  fetchVideosFailure,
} from 'actions';

const fetchPage = (searchValue, pageToken, filter) => (dispatch) => {
  dispatch(fetchVideosRequest());
  let url;
  if (filter) {
    url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchValue}&type=video&maxResults=10&pageToken=${pageToken}&${filter}&key=AIzaSyDwn1T4zBSOOn9ZCY1eo8gdOhO1ONsk4zA`;
  } else {
    url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchValue}&type=video&maxResults=10&pageToken=${pageToken}&key=AIzaSyDwn1T4zBSOOn9ZCY1eo8gdOhO1ONsk4zA`;
  }
  return fetch(url)
    .then(res => res.json())
    .then(res => dispatch(fetchVideosSuccess(res)))
    .catch(err => dispatch(fetchVideosFailure(err)));
};

export default fetchPage;
