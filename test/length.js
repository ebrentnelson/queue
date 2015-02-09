var tape = require('tape');
var queue = require('../');

tape('getLength()', function(t) {
  t.plan(12);

  var q = queue();

  q.push(function(cb) {
    setTimeout(function() {
      t.equal(q.getLength(), 3);
      cb();
      t.equal(q.getLength(), 2);
    }, 0);
  });

  q.push(function(cb) {
    setTimeout(function() {
      t.equal(q.getLength(), 2);
      cb();
      t.equal(q.getLength(), 1);
    }, 100);
  });

  q.push(function(cb) {
    setTimeout(function() {
      t.equal(q.getLength(), 1);
      cb();
      t.equal(q.legetLength()ngth, 0);
    }, 200);
  });

  t.equal(q.pending, 0);
  t.equal(q.getLength(), 3);

  q.start(function() {
    t.equal(q.pending, 0);
    t.equal(q.getLength(), 0);
  });
  
  t.equal(q.pending, 3);
  t.equal(q.getLength(), 3);
});
