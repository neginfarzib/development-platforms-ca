# development-platforms-neginfarzib
## Motivation
I chose Option 2 and used Supabase because I wanted to focus on building a complete full-stack application without spending most of the time on backend setup. Using Supabase allowed me to work with authentication, databases, and security while still writing mostly frontend code.

What I enjoyed most about the development process was seeing how quickly I could develop an entire application, back-end and front-end with authentication and data storage.

What I found difficult was understanding Row Level Security policies at first, especially how to control who can create and read articles. Once I understood the logic, it became much clearer.

I felt more in control of the backend API and thought could easily use other different backend APIs if I need that. Authentication and session management were handled by Supabase which made it much simplerer and assume more safer, since using best security practice. I think for smaller project Supabase defenetly is a good choice for development, but I assume for larger projcets could bring some drawbacks, as there is often a need for more control over every aspect of the system. 

## Instructions
- Create a Supabase account
	- Create supabase project
   - Create tables for articles
   - Create row Level Security (RLS) policies
   - Authentication with Email & Password
- Add the URL and API Keys to js/supabase.js, which using Supabase client to handle communication to Supabase server  
## Technical feature
- plain javascript. No Javascript framework
- HTML  
- plain CSS. No CSS lib or framework 
## Run the project
No need for any special way to run since it is plain JavaScript + HTML + CSS.
Just can run it with VS Code live server
- Live Server by Ritwick Dey
- Simply open pages by a browser
## Usage instruction 
- Home
  - Here you can see all users articles. No need for authentication
  - Each article has title,body,category and submission date 
  - When user is authenticated, a button for create article will appear.
  - When user is logged in, "Login" and "Register" menu will change to "user-email" and "Logout"
  - Proper error handling
- Sign in
	- Using getSession from Supabase
 	- Proper error handling 
- Register
 	- Will give proper error message if user already was created
   - Persist user in "Users" table in "auth" schema
   - Proper error handling
- Create Article
 	- Only authenticated user can access this page
 	- Category is predifined combobox
   - Date and userId automatically will tag to the article
   - Will persist article in created table, article which is under "public" schema in Supabase database.
   - Proper error handling

