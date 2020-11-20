### React Notes Project 📝

I created a small notes taking application/website that allows the user to login after registering and then get directed to the notes taking portion. But since
we're assuming anyone who uses this website is a new user, once the user registers, then they will be sent straight to the notes. I named this "jot bot" - it's 
meant to create small notes, nothing too big - it's meant to hold small amounts of text and/or reminders.

I coding along several video tutorials that helped me understand redux, react, apis, and bootstrap:
- https://www.youtube.com/playlist?list=PLWieu6NbbqTyMaRRywunCGZZsi8gmw7dh <br>
- https://www.youtube.com/playlist?list=PLWieu6NbbqTxb-mKf4J0_Pl3vmGWmOfmY

### Front-End

The front-end held the components of my pages, so my login, register, notes. The login obviously takes in the users email and password, and the register will take
a larger input, so first and last name, email, and password. So from there, once the user registers you get sent into the notes. From there, you'll see an empty
notes space, and you only really have one function which is creating the note and then when you click it, you'll edit a note. The note will take in four forms, a
title, a content, a description, and a category (so, if your notes are related to school, or your job). The category also has general, for more general notes. 

And once you've saved the note, you'll be returned back to your notes folder and your new notes should appear there. From there, you have the option to re-edit 
the notes and you can also delete the note if you no longer need it. The application is fairly straight forward - but I've probably watched like 70 videos in the 
past 5 days that had to do with react and redux. 

The front-end portion also held bootstrap, so I had to download the dependencies and from there, it was much easier to add simple navbars and buttons, links, and
bootstrap really took care of the whole styling of it. So, I did have to create a bootstrap folder that just holds the imports of the features I wanted to use from bootstrap. I application also utilized toastify - which was just a function that gives animations. It wasn't necessary - but helps make the website look more functioning than it actually is. 

I had to rely heavily on YouTube, Stack Overflow, Google, beacuse my code was going nowhere in the beginning and the more I touched it, the more I broke it. 

### Back-End

The back-end was confusing, especially because we utilized MONGODB and had to create folders like controls and middleware, which pretty much does the same thing
as context apis, so getting, posting, deleting the notes that the user has created in a more sophisticated, annoying way. But in terms of familiarity, the format
of the code is fairly familiar to previous assignments. I'm still attempting to learn and want to get comfortable with MONGDO DB, because I did prefer using it,
compared to how we had to start two localhosts and I can see some pros with using it - but I still hate it. 

### The Hardest Part

The whole project was extremely difficult, I think working with a tutorial made it easier - but there's lots of parts of my project that was really complex and
theres probably lots of commenting that I would like to go back to doing. I also thought redux made things simple, but for someone like me, that probably was
not the best idea. I could've done this project completely differently, if I did have extra time. 

### My Favorite Part // More Time?

My favorite part of this project was actually seeing it come together and seeing how the code worked, because since I was coding along and then writing things
down, I was getting a much clearer understanding of how react and redux worked together and how databases and APIs and the whole shabang worked. The project also
really solidified my love for bootstrap and made me realize I want a career in bootstrap. But I think ultimately, bootstrap made me waste less time on styling, and more on functionality. 

I would probably refactor my code, even if it made the code longer, I would want my project to be more readable because sometimes I look at my code and I'm just
like, what did I do there? And I would change the functionality of my application to where the notes were more like the Apple Notes - so it's for longer notes. 
But I think this project took me to the end of the swimming pool and pushed me into 10 ft deep water. 
