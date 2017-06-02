module.exports = {
  bind : function (app) {

    app.get('/', function (req, res) {
      res.render('index');

    });
    /* This is a bit of code that looks for an index.html page in any directory */

    



    /* - - - - - - - - - - - - - - - - -  -  */
    /* Pass nextpage for Basic Flow control  */


    app.get('/basic-flow', function (req, res) {
    /* line above starts a new JS function, receives the form action event from the webpage */

    var next = req.query.nextlink;
    //var v11 = req.query.v11;
    /* this line pulls out the name of the next page that was sent with the weblink */

    res.render(next);
    /* this line renders a new page based on the HTML of the file sent as the next page */
    
 
    });
    /* ends the app.get javascript function */







    /* - - - - - - - - - - - - - - - - - - - */
    /* Chooser for Basic Branching control   */


    app.get('/basic-branch', function (req, res) {

    var next = req.query.nextlink;
    /* this line pulls out the filename of the next page, sent with the weblink */

    var branch = req.query.branch;
    /* this line pulls out the name of the branch from the input buttons */

    res.render(next + '-' + branch);
    /* this line renders a new page based on the HTML of the filename + branchname  */
    
 
    });
    /* ends the app.get javascript function */



    /* - - - - - - - - - - - - - - - - - - - */
    /* Contact form via Nodemailer   */

    app.get('/contact', function (req, res) {

     var next = req.query.nextlink;

    
    
   res.render(next);
    /* this line renders a new page based on the HTML of the file sent as the next page */
    
    
 
    });
    /* ends the app.get javascript function */





  }
};
