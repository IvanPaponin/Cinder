const passport = require ('passport');
const GoogleStrategy = require('passport-google-oauth').OAuthStrategy;

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(new GoogleStrategy({
  consumerKey: '790091612101-akh9tihrroun1k5vgmv0ktleqtmdvrc2.apps.googleusercontent.com',
  consumerSecret: '4P-9Ypm4VvZfPPg8AfBNqieq',
  callbackURL: 'http://localhost:8080/google/callback'
},
function(token, tokenSecret, profile, done) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(err, user);
    });
}
));
