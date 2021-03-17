# Later Birdy

The current iteration of Later Birdy is a simple front-end interface where you can send tweets to Twitter via the Twitter API. Any tweets sent from here will be recorded, and you can click on it to go to that tweet.

The original idea behind Later Birdy is to also includes the following features:
* a tweet later functionality
  * Write up a 280-character tweet now, and pick a later time to send out the tweet
* Schedule repeating tweet that will tweet per hour, day, month, or year
* Delete any scheduled tweets before it is sent out

Because the original idea was only meant for scheduling text tweets, the follow features were not in the immediate plans:
* post-tweet metrics
* attaching media to post
* DMs management


After some time away from working on this project, I have decided to take Later Birdy into a different direction. The original code base will be save in a legacy branch, and the new Later Bird will be under "lbv2" branch.

## New Direction

The next iteration of Later Birdy will be more of a "command hub" for quote bots. I plan on continuing implementing most of the original features, since it is a critical piece of the application. And you can still use this as originally intended. But the overall functionality itself is centered around organizing and managing your twiter quote bots.

## To-Do List/Features:

Below you will find all the features currently being developed, included the previously intended features:

- [ ] Twitter Auth for anyone, or bot, to access the main hub
- [ ] A scheduling functionality. Both for one time schedule and a repeating schedule.
  - [ ] Schedule your own tweet(s)
    - [ ] Schedule a tweet thread
  - [ ] Schedule a tweet from database of saved tweets
    - [ ] Tweets sent this way will be formated to give credit to the original tweeter when possible.
- [ ] Stopping scheduled tweets.
  - [ ] Stopping one-time tweets before it is sent out.
  - [ ] Stopping any repeating scheduled tweets.
- [ ] Re-enable any scheduled tweets.
- [ ] Removing any scheduled tweets.
  - [ ] Removing can be done to both active and inactive scheduled tweets
- [ ] Editing scheduled tweets.
  - [ ] Editing one-time tweets before it is sent out.
  - [ ] Edit any repeating scheduled tweets.
- [ ] Search by username(s) or keyword(s)
- [ ] Save a tweet to the database
  - [ ] Save a tweet from the search
  - [ ] Write your own tweet and save that to the database

More features to come!