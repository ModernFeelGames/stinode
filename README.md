Stinode Updated!
=================

**`stibarc.login()` is now depreciated!**
In order to login, go to [STiBaRC](https://stibarc.gq), open Inspect Element, open "Application", and open "Local Storage", and copy "sess". As well as not being able to log in via the api, you can not create new accounts either.

To check if your session key is valid, use `stibarc.checkSess(sess)`

**Get Started**

```
var stibarc = require('./stinode')
var sess = "session-key" // Save your session key, you'll need it :)

stibarc.checkSess(sess);
stibarc.getUsername(sess, function(username) {
  console.log("Logged in as: " + username)
});

stibarc.newPost(sess, "Posted with stinode!", "A sample post using stinode!") // Will log your post id!

stibarc.destroySession(sess); // Destroys a session key, this is reccomended if you don't plan on using it again.
```


<br/>

Documentation
------------

### checkSess
Checks if a session key is valid

Arguments: session

Usage:
`stibarc.checkSess(sess)`

### checkVerify
Checks if a user is verrified

Arguments: username

Usage:
`stibarc.checkVerify(username)`

### editPost
edits a post, only works if you have this function enabled.

Arguments: session, postId, title, content

Usage:
`stibarc.editPost(sess, postId, title, content)`

### getComments
gets comments from a specified post

Arguments: postId, callback

Usage:
```
stibarc.getComments(postId, function(callback) {
  var comments = callback
  console.log(comments)
});
```

### getNotifs
Gets notifications

Arguments: callback

Usage:
```
stibarc.getNotifs(function(callback){
  var notifs = callback
  console.log(notifs)
});
```

### getPost
gets data for a specific post

Arguments: postId, Callback

Usage:
```
stibarc.getPost(postId, function(callback) {
  var post = callback
  console.log(post)
})
```

### getPosts
Gets recent posts

Arguments: callback

Usage:
```
stibarc.getPosts(function(callback) {
  var posts = callback
  console.log(posts)
})
```

### getPostTitle
Gets a specified posts title

Arguments: postId, callback

Usage:
```
stibarc.getPostTitle(postId,function(callback) {
  var postTitle = callback
  console.log(postTitle)
})
```

### getUser
Gets a users data

Arguments: username, callback

Usage:
```
stibarc.getPosts(username,function(callback) {
  var userData = callback
  console.log(userData)
})
```

### getUsername
Gets a username tied to a session key

Arguments: session, callback

Usage:
```
stibarc.getPosts(session, function(callback) {
  var username = callback
  console.log(username)
})
```

### destroySession
Destroys a session key / same as stibarc.logout

Arguments: session

Usage:
`stibarc.destroySession(session)`

### postComment
Posts a comment on a given post

Arguments: session, postId, content

Usage:
`stibarc.getPosts(session, postId, content)`

### newPost
Creats a new stibarc post!

Arguments: session, title, content

Usage:
`stibarc.newPost(sess, title, content)`

### downvote
Downvotes a given post

Arguments: session, postId

Usage:
`stibarc.downvote(sess, postId)`

### upvote
Upvotes a given post

Arguments: session, postId

Usage:
`stibarc.upvote(sess, postId)`
