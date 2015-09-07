var matchController = require('./activityCtrl');

module.exports = function(app) {
  app.get('/', activityCtrl.getActivities);
  app.route('/match')
    .post(activityCtrl.matchCouple);
    .get(activityCtrl.getMatch);
}
