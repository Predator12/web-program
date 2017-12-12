var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var morgan = require('morgan');
var cors = require('cors')

app.use(cors());
app.use(morgan('dev'));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;


var mongoose = require('mongoose');
mongoose.connect('mongodb://Pavel1:admin@ds135916.mlab.com:35916/pavel');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
    console.log("DB connection alive");
});


var Post = require('./app/models/post');


var router = express.Router();


router.use(function(req, res, next) {

    console.log('Something is happening.');
    next();
});


router.get('/', function(req, res) {
    res.json({ message: '' });
});


router.route('/posts')


.post(function(req, res) {

    var post = new Post();
    post.namearticle = req.body.namearticle;
    post.shortdescription = req.body.shortdescription;
    post.longdescription = req.body.longdescription;
    post.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'Новину створено' });
    });


})

.get(function(req, res) {
    Post.find(function(err, posts) {
        if (err)
            res.send(err);

        res.json(posts);
    });
});

router.route('/posts/:post_id')

.get(function(req, res) {
    Post.findById(req.params.post_id, function(err, post) {
        if (err)
            res.send(err);
        res.json(post);
    });
})


.put(function(req, res) {
    Post.findById(req.params.post_id, function(err, post) {

        if (err)
            res.send(err);

        post.namearticle = req.body.namearticle;
        post.shortdescription = req.body.shortdescription;
        post.longdescription = req.body.longdescription;
        post.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Post updated!' });
        });

    });
})


.delete(function(req, res) {
    Post.remove({
        _id: req.params.post_id
    }, function(err, post) {
        if (err)
            res.send(err);

        res.json({ message: 'Successfully deleted' });
    });
});

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);
