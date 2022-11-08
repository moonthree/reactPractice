import { configureStore, createSlice  } from '@reduxjs/toolkit'

// useState() 역할임
// state 하나를 slice라고 부름
let cnt = 0
let postScroll = createSlice({
  name: 'postScroll',
  initialState: [
    {
      id : 1,
      title : '제목11111',
      content : '내용111111111111',
      viewCount : 123,
      likeCount : 25,
      imageUrl : 'https://codingapple1.github.io/shop/shoes1.jpg',
      createAt : '2022-11-05',
      modifiedAt : '2022-11-07'
    },
    {
      id : 2,
      title : '제목222222222222222222',
      content : '내용22222222222222',
      viewCount : 23,
      likeCount : 32,
      imageUrl : null,
      createAt : '2022-11-07',
      modifiedAt : '2022-11-07'
    },
    {
      id : 3,
      title : '2222222222',
      content : '내용111111111111',
      viewCount : 123,
      likeCount : 0,
      imageUrl : 'https://codingapple1.github.io/shop/shoes1.jpg',
      createAt : '2022-11-05',
      modifiedAt : '2022-11-07'
    },
  ],
  reducers : {
    like(state, action) {
      // alert('a')
      console.log(state[action.payload])
      state[action.payload].likeCount += 1
    },
    selectSort(state, action) {
      if (action.payload === 'popular') {
        state = state.sort((a,b) => {
          if(a.likeCount < b.likeCount) return 1;
          if(a.likeCount > b.likeCount) return -1;
          return 0;
        });
      } else {
        state = state.sort((a,b) => {
          if(a.id > b.id) return 1;
          if(a.id < b.id) return -1;
          return 0;
        });
      }
      console.log(state)
    },
    scrollEvent(state) {
      let a = post.getInitialState().slice(cnt, cnt+3)
      console.log(a[0])
      const proxy1 = new Proxy(a[0], 'a');
      cnt += 3
      state = [...state, ...a]
      state.push(proxy1)
      console.log(state)
    }
  }
})
let post = createSlice({
  name : 'post',
  initialState : [
    {
      id : 4,
      title : '333333333333333',
      content : '내용111111111111',
      viewCount : 123,
      likeCount : 10,
      imageUrl : 'https://codingapple1.github.io/shop/shoes1.jpg',
      createAt : '2022-11-05',
      modifiedAt : '2022-11-07'
    },
    {
      id : 5,
      title : '444444444444444444',
      content : '내용111111111111',
      viewCount : 123,
      likeCount : 46,
      imageUrl : 'https://codingapple1.github.io/shop/shoes1.jpg',
      createAt : '2022-11-05',
      modifiedAt : '2022-11-07'
    },
    {
      id : 6,
      title : '66666666666666',
      content : '내용111111111111',
      viewCount : 123,
      likeCount : 10,
      imageUrl : 'https://codingapple1.github.io/shop/shoes1.jpg',
      createAt : '2022-11-05',
      modifiedAt : '2022-11-07'
    },
    {
      id : 7,
      title : '77777777777777',
      content : '내용111111111111',
      viewCount : 123,
      likeCount : 46,
      imageUrl : 'https://codingapple1.github.io/shop/shoes1.jpg',
      createAt : '2022-11-05',
      modifiedAt : '2022-11-07'
    },
    {
      id : 8,
      title : '88888888888888',
      content : '내용111111111111',
      viewCount : 123,
      likeCount : 10,
      imageUrl : 'https://codingapple1.github.io/shop/shoes1.jpg',
      createAt : '2022-11-05',
      modifiedAt : '2022-11-07'
    },
    {
      id : 9,
      title : '999999999999999',
      content : '내용111111111111',
      viewCount : 123,
      likeCount : 46,
      imageUrl : 'https://codingapple1.github.io/shop/shoes1.jpg',
      createAt : '2022-11-05',
      modifiedAt : '2022-11-07'
    },
    {
      id : 10,
      title : 'tentententententententententen',
      content : '내용111111111111',
      viewCount : 123,
      likeCount : 46,
      imageUrl : 'https://codingapple1.github.io/shop/shoes1.jpg',
      createAt : '2022-11-05',
      modifiedAt : '2022-11-07'
    },
  ],
  reducers: {
  }
})
export let { like, selectSort, scrollEvent } = postScroll.actions

export default configureStore({
  reducer: {
    post : post.reducer,
    postScroll : postScroll.reducer
  }
}) 