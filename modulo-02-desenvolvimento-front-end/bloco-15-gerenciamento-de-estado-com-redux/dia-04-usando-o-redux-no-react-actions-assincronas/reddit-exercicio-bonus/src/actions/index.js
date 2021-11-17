export const REQUEST_API = 'REQUEST_API';
export const COMPLETED_REQUEST = 'COMPLETED_REQUEST';
export const FAILED_REQUEST = 'FAILED_REQUEST';
export const FETCH_API = 'FETCH_API';

export const ordering = () => ({
  type: REQUEST_API
});

export const getRequest = (json) => ({
  type: COMPLETED_REQUEST,
  json,
})

export const failedRequest = (error) => ({
  type: FAILED_REQUEST,
  error,
});

export const fetchAPI = (subreddit) => {
  return (dispatch) => {
    dispatch(ordering());
    return fetch(`https://www.reddit.com/r/${subreddit}.json`)
    .then((response) => response.json())
    .then(
      (json) => dispatch(getRequest(json)),
      (error) => dispatch(failedRequest(error)),
    )
  }
};
