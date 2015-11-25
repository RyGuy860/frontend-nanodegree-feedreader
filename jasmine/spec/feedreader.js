/* Some of the test may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* The RSS feeds suite*/

    describe('RSS Feeds', function() {

        /*Defines the allFeed variable and it is not empty*/

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(null);
        });


        /*Loops through each feed in allFeeds object and
          ensures it has a URL defined and that the URL is not empty.
         */
        it('should have a url defined that is not empty', function() {

            // created a for loop for allFeeds;
            for (var i = 0; i < allFeeds.length; i++) {
                allFeeds[i].url;

                expect(allFeeds).not.toBe(0);
                expect(allFeeds[i].url).toContain('http:'); //ensures URL is not empty
            };



        });




        /* Loops through each feed in the allFeeds object
           and ensures it has a name defined and that the name is not empty.
         */

        it('should have a name and the name should not be empty', function() {

            for (var i = 0; i < allFeeds.length; i++) {

                expect(allFeeds).not.toBe(0);
                expect(allFeeds[i].name).toContain(''); //ensures Name contains a string
            };
        });
    });


    /* "The menu" test suite */
    describe('The menu', function() {
        var $body = $('body');
        var menuIcon = $('.menu-icon-link');



        /* Ensures the menu element is hidden by default.*/
        it('should be hidden by default', function() {

            expect($body.hasClass('menu-hidden')).toBe(true);
        });


        /* Ensures the menu changes visibility when the menu icon is clicked.*/

        it('should be visable when clicked and hidden when clicked again', function() {




            menuIcon.click(); // intial click of menuIcon button displaying menu
            expect($body.hasClass('menu-hidden')).toBe(false);
            menuIcon.click(); // second click of menuIcon button closing menu
            expect($body.hasClass('menu-hidden')).toBe(true);

        });

    });

    /* Test suite "Initial Entries" */

    describe('Initial Entries', function() {
        /* call to loadFeed function to ensure the first feed of allFeeds to the page*/
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });



        /* Ensures when the loadFeed function is called and completes its work,
         * there is at least a single .entry element within the .feed container.
         */

        it('should load a single .entry within the feed container', function() {
            $entry = $('.feed .entry')[0];
            expect($entry).toBeGreaterThan('');
            console.log($entry);

        });
    });




    /* Test suite "New Feed Selection"*/

    describe('New Feed Selection', function() {
        var newFeedTitle;
        var oldFeedTitle;

        beforeEach(function(done) {
            loadFeed(0, function() {
                oldFeedTitle = ($('.header-title').html()); //first feed title
                done();
                console.log(oldFeedTitle); //om

            });
        });
        loadFeed(1, function() {
            newFeedTitle = ($('.header-title').html());
            console.log(newFeedTitle);
        });




        /* Ensures when a new feed is loadedby the loadFeed function
           that the content actually changes.
         */
        it('should have add another feed', function() {


            expect(newFeedTitle).not.toBe(oldFeedTitle); //compares old feed title content to new feed title content
        });
    });

}());