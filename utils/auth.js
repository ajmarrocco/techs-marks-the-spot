// if there is no session user id then it will redirect user to login 
const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect('/login');
    } else {
        next();
    }
};
// export withAuth
module.exports = withAuth;