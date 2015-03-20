'use strict';

var redis = require('../lib/redis');

/**
 * Save badges to database
 * @param {Array} badges
 * @param {Function} callback
 */
var save = function (badges, callback) {
  var badge = badges.pop();
  redis.lpush('badges', JSON.stringify(badge), function (err) {
    if (err) return callback(err, null);
    // recursion
    save(badges, callback);
  });
};

exports.save = save;
