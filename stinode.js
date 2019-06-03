var http = require("http");
var https = require("https");

exports.checkSess = function (sessKey) {
  var opts = {
		hostname: "api.stibarc.gq",
		path: "/checksess.sjs",
		method: "POST"
	}
  
  var req = https.request(opts, function(res) {
    var data = "";
    
		res.on('data', function(body) {
			data = data+body;
		});
    
		res.on('end', function() {
      console.log(`Session key is ${data}`)
		});
	});
	
  req.write(`sess=${sessKey}`);
	req.end();
};

//----------------------------------//

exports.checkVerify = function (username) {
  var opts = {
		hostname: "api.stibarc.gq",
		path: "/checkverify.sjs",
		method: "POST"
	}
  
  var req = https.request(opts, function(res) {
    var data = "";
    
		res.on('data', function(body) {
			data = data+body;
		});
    
		res.on('end', function() {
      console.log(`${data}`)
      return data;
		});
	});
	
  req.write(`id=${username}`);
	req.end();
};

//----------------------------------//

exports.editPost = function (sess, id, title, content) {
  var opts = {
		hostname: "api.stibarc.gq",
		path: "/editpost.sjs",
		method: "POST"
	}
  
  var req = https.request(opts, function(res) {
    var data = "";
    
		res.on('data', function(body) {
			data = data+body;
		});
    
		res.on('end', function() {
      if (data.startsWith("No")) {
        console.log("Error, editPost unsuccessful")
      } else {
        console.log(data)
      }
		});
	});
	
  req.write("sess="+ sess +"&id=" + id +"&title=" + title + "&content=" + content);
	req.end();
};

//----------------------------------//

exports.getComments = async function (id, callback) {
  var opts = {
		hostname: "api.stibarc.gq",
		path: "/getcomments.sjs",
		method: "POST"
	}
  
  var req = https.request(opts, function(res) {
    var data = "";
    
		res.on('data', function(body) {
			data = data+body;
		});
    
		res.on('end', function() {
      callback(data)
		});
	});
	
  req.write(`id=${id}`);
	req.end();
};

exports.getNotifs = async function (callback) {
  var opts = {
		hostname: "api.stibarc.gq",
		path: "/getnotifs.sjs",
    headers: {'User-Agent': 'Mozilla/5.0'},
		method: "POST"
	}
  
  var req = https.request(opts, function(res) {
    var data = "";
    
		res.on('data', function(body) {
			data = data+body;
		});
    
		res.on('end', function() {
      callback(data)
		});
	});
	req.end();
};

//---------------------//

exports.getPost = function (postId, call) {
  var opts = {
		hostname: "api.stibarc.gq",
		path: "/getpost.sjs",
		method: "POST"
	}
  
  var req = https.request(opts, function(res) {
    var data = "";
    
		res.on('data', function(body) {
			data = data+body;
		});
    
		res.on('end', function() {
      call(data)
		});
	});
  req.write(`id=${postId}`);
	req.end();
};

//---------------------//

exports.getPosts = function (call) {
  var opts = {
		hostname: "api.stibarc.gq",
		path: "/v2/getposts.sjs",
		method: "POST"
	}
  
  var req = https.request(opts, function(res) {
    var data = "";
    
		res.on('data', function(body) {
			data = data+body;
		});
    
		res.on('end', function() {
      call(data)
		});
	});
	req.end();
};


//---------------------//

exports.getPostTitle = function (postId, call) {
  var opts = {
		hostname: "api.stibarc.gq",
		path: "/gettitle.sjs",
		method: "POST"
	}
  
  var req = https.request(opts, function(res) {
    var data = "";
    
		res.on('data', function(body) {
			data = data+body;
		});
    
		res.on('end', function() {
      call(data)
		});
	});
  req.write(`id=${postId}`);
	req.end();
};

//---------------------//

exports.getUser = function (userId, call) {
  var opts = {
		hostname: "api.stibarc.gq",
		path: "/v3/getuser.sjs",
		method: "POST"
	}
  
  var req = https.request(opts, function(res) {
    var data = "";
    
		res.on('data', function(body) {
			data = data+body;
		});
    
		res.on('end', function() {
      call(data)
		});
	});
  req.write(`id=${userId}`);
	req.end();
};


//---------------------//

exports.getUsername = function (session, call) {
  var opts = {
		hostname: "api.stibarc.gq",
		path: "/getusername.sjs",
		method: "POST"
	}
  
  var req = https.request(opts, function(res) {
    var data = "";
    
		res.on('data', function(body) {
			data = data+body;
		});
    
		res.on('end', function() {
      call(data)
		});
	});
  req.write(`sess=${session}`);
	req.end();
};

//---------------------//

exports.getUserPosts = function (userId, call) {
  var opts = {
		hostname: "api.stibarc.gq",
		path: "/getuserposts.sjs",
		method: "POST"
	}
  
  var req = https.request(opts, function(res) {
    var data = "";
    
		res.on('data', function(body) {
			data = data+body;
		});
    
		res.on('end', function() {
      call(data)
		});
	});
  req.write(`id=${userId}`);
	req.end();
};

//---------------------//

exports.destroySession = function (session) {
  var opts = {
		hostname: "api.stibarc.gq",
		path: "/logout.sjs",
		method: "POST"
	}
  
  var req = https.request(opts, function(res) {
    var data = "";
    
		res.on('data', function(body) {
			data = data+body;
		});
    
		res.on('end', function() {
      console.log(data)
		});
	});
  req.write(`sess=${session}`);
	req.end();
};

//---------------------//

exports.logout = function (session) {
  var opts = {
		hostname: "api.stibarc.gq",
		path: "/logout.sjs",
		method: "POST"
	}
  
  var req = https.request(opts, function(res) {
    var data = "";
    
		res.on('data', function(body) {
			data = data+body;
		});
    
		res.on('end', function() {
      console.log(data)
		});
	});
  req.write(`sess=${session}`);
	req.end();
};

//---------------------//

exports.postComment = function (session, postId, comment) {
  var opts = {
		hostname: "api.stibarc.gq",
		path: "/newcomment.sjs",
		method: "POST"
	}
  
  var req = https.request(opts, function(res) {
    var data = "";
    
		res.on('data', function(body) {
			data = data+body;
		});
    
		res.on('end', function() {
      console.log(data)
		});
	});
  req.write(`postid=${postId}&sess=${session}&content=${comment}`);
	req.end();
};

//---------------------//

exports.newPost = function (session, title, content) {
  var opts = {
		hostname: "api.stibarc.gq",
		path: "/postpost.sjs",
		method: "POST"
	}
  
  var req = https.request(opts, function(res) {
    var data = "";
    
		res.on('data', function(body) {
			data = data+body;
		});
    
		res.on('end', function() {
      console.log(data)
		});
	});
  req.write(`sess=${session}&title=${title}&content=${content}`);
	req.end();
};


//---------------------//

exports.searchPost = function (q, callback) {
  var opts = {
		hostname: "api.stibarc.gq",
		path: "/postsearch.sjs",
		method: "POST"
	}
  
  var req = https.request(opts, function(res) {
    var data = "";
    
		res.on('data', function(body) {
			data = data+body;
		});
    
		res.on('end', function() {
      callback(data)
		});
	});
  req.write(`query=${q}`);
	req.end();
};

//---------------------//

exports.updatePassword = function (session, oldPassword, newPassword, newPassword2) {
  var opts = {
		hostname: "api.stibarc.gq",
		path: "/updatepasswd.sjs",
		method: "POST"
	}
  
  var req = https.request(opts, function(res) {
    var data = "";
    
		res.on('data', function(body) {
			data = data+body;
		});
    
		res.on('end', function() {
      console.log(data)
		});
	});
  req.write(`sess={session}&old=${oldPassword}&new=${newPassword}&new2={newPassword2}`);
	req.end();
};

//---------------------//

exports.downvote = function (session, postId) {
  var opts = {
		hostname: "api.stibarc.gq",
		path: "/downvote.sjs",
		method: "post"
	}
  
  var req = https.request(opts, function(res) {
    var data = "";
    
		res.on('data', function(body) {
			data = data+body;
		});
    
		res.on('end', function() {
      console.log(data)
		});
	});
  req.write(`id=${postId}&sess=${session}`);
	req.end();
};

//---------------------//

exports.upvote = function (session, postId) {
  var opts = {
		hostname: "api.stibarc.gq",
		path: "/upvote.sjs",
		method: "post"
	}
  
  var req = https.request(opts, function(res) {
    var data = "";
    
		res.on('data', function(body) {
			data = data+body;
		});
    
		res.on('end', function() {
      console.log(data)
		});
	});
  req.write(`id=${postId}&sess=${session}`);
	req.end();
};

//---------------------//

exports.follow = function (session, id) {
  var opts = {
		hostname: "api.stibarc.gq",
		path: "/v3/follow.sjs",
		method: "post"
	}
  
  var req = https.request(opts, function(res) {
    var data = "";
    
		res.on('data', function(body) {
			data = data+body;
		});
    
		res.on('end', function() {
      console.log(data)
		});
	});
  req.write(`sess=${session}&id=${id}`);
	req.end();
};

//---------------------//

exports.unfollow = function (session, id) {
  var opts = {
		hostname: "api.stibarc.gq",
		path: "/v3/unfollow.sjs",
		method: "post"
	}
  
  var req = https.request(opts, function(res) {
    var data = "";
    
		res.on('data', function(body) {
			data = data+body;
		});
    
		res.on('end', function() {
      console.log(data)
		});
	});
  req.write(`sess=${session}&id=${id}`);
	req.end();
};
