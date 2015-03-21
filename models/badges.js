'use strict';

var redis = require('../lib/redis');

/**
 * Save badges to database
 * @param {Array} badges
 * @param {Function} callback
 */
var save = function (badges, callback) {
  // recursion terminator
  if (!badges.length) return callback(null, null);

  var badge = badges.pop();
  redis.lpush('badges', JSON.stringify(badge), function (err) {
    if (err) return callback(err, null);
    // recursion
    save(badges, callback);
  });
};

/**
 * Trim down the redis list
 */
var trim = function () {
  redis.ltrim('badges', 0, 9);
};

/**
 * Get badges from redis
 * @param {Function} callback
 */
 var get = function (callback) {
  redis.lrange('badges', 0, -1, callback);
 };

exports.save = save;
exports.trim = trim;
exports.get  = get;
