'use strict'

const app = require('../app.js')
const hide = require('../hide.js')
// const store = require('../store.js')

// const index =require('../index.js')

const onCreatePostSuccess = function () {
  hide.countDownTimer()
  console.log('You successfully post an item')
  // app.user = data.user
}

const onCreatePostError = function (response) {
  console.error(response)
}

const onGetPostsSuccess = function (data) {
  hide.countDownTimer()
  app.posts = data.posts
  console.log(app.posts)
  console.log('You successfully get post')

  /*
  save the data coming in here as post data
  select the element where you want the post to go w jQuery
  look up "setInterval" funciton lets you do something every x millseconds
  use $(somelement).html method from jquery to change the element html
  EXAMPLE:
  */
  let timeleft = 0
  const downloadTimer = setInterval(function () {
    $('.rotatingmessages').html(`<h1>${app.posts[timeleft].title}</h1><h2>${app.posts[timeleft].description}</h2>`)
    console.log(timeleft)
    console.log(app.posts.length)
    if (timeleft > app.posts.length - 2) {
      // debugger
      timeleft = 0
      // clearInterval(downloadTimer)
    } else {
      timeleft++
    }
  }, 7000)

  // $('.wholepicture').html(`<h1>${app.posts[2].title}</h1>${app.posts[2].description}`)
  console.log(app)
  console.log('You successfully got post')
}

const onGetPostsError = function (response) {
  console.error(response)
}

const onShowPostSuccess = function () {
  hide.countDownTimer()
  console.log('You succesfully showing your posting')
}

const onShowPostError = function (response) {
  console.log(response)
}

const onDeletePostsSuccess = function () {
  // $('.' + app.posts.id).remove()
  console.log('You successfully deleted your post')
}

const onDeletePostsError = function (response) {
  console.log(response)
}

const onUpdatePostSuccess = function () {
  console.log('You successfully updated a post')
}

const onUpdatePostError = function (response) {
  console.error(response)
}

module.exports = {
  onCreatePostSuccess,
  onCreatePostError,
  onGetPostsSuccess,
  onGetPostsError,
  onShowPostSuccess,
  onShowPostError,
  onDeletePostsSuccess,
  onDeletePostsError,
  onUpdatePostSuccess,
  onUpdatePostError
}
