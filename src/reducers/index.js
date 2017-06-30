import {
  LANG_COUNTS_UPDATE,
  SELECTED_LANG_UPDATE,
  QUERIES_UPDATE,
  COUNT_UPDATE,
  TWEETS_SET,
  TWEETS_APPEND
} from '../actions'

const initialState = {
  queryTerms: [],
  langCounts: [],
  selectedLangs: [],
  tweets: [],
  totalTweets: 0
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case LANG_COUNTS_UPDATE:
      return Object.assign({}, state, {
        langCounts: action.langCounts
      })
    case SELECTED_LANG_UPDATE:
      return Object.assign({}, state, {
        selectedLangs: action.selected
      })
    case QUERIES_UPDATE:
      return Object.assign({}, state, {
        queryTerms: action.queries
      })
    case COUNT_UPDATE:
      return Object.assign({}, state, {
        totalTweets: action.count
      })
    case TWEETS_SET:
      return Object.assign({}, state, {
        tweets: action.tweets
      })
    case TWEETS_APPEND:
      const tweets = state.tweets.concat(action.tweets)
      const tweet_ids = []

      /* filter for duplicates */
      const uniques = tweets.filter((tweet) => {
        if (tweet_ids.includes(tweet.id)) {
          return false
        }
        tweet_ids.push(tweet.id)
        return true
      })

      return Object.assign({}, state, {
        tweets: uniques
      })
    default:
      return state
  }
}
