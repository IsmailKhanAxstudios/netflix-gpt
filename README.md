# Steps

- Create React App
- Tailwind
- Setup and Route Body as Main
- Header

#### 1. User Authentication

- Login Form
- Sign Up Form Same Login form to SignUp Form - Validations Custom
- For Validation Use Library Formik - useRef utils func
- Authentication - firebase - enable auth firbase - utils
  Firebase - Create firebase account follow steps -> create fire base file and add details -> Optionally Github Actions->Fireabse Build in src -> Enable User auth
- Log In Logic
- Creating Redux Store for Storing User Object
- onAuthChange - when some authentication happen it is executed
- Navigate direclty on auth change useEffect
- Sign Out Apis , Updated User - > Auth.currentUser
- Protected Routes Logged In User Should stay on Browse not on log In and Not Logged in User stay at logged in Not browse - Use on AuthState and Protected route there - unsubscribe event cleanup

#### 2. Fetch Movies and Browse Page

- TMDB Movie Database - login edit profile - api api key , api access token
- Documentation - api reference - playing movies
- React strict Mode two times
- Fetching data in component - putting in redux
- Custom Hook
- Building Page

1. Main Container (Title , Background )
2. Secondary Container (Movie List -> Cards)

- Always Plan structure
- Video API Fetch yOUTUBE - Iframe Code and Key
- Trailer in state or redux
- Custom Hook wscreen and aspect video class
- Secondary - Popular , Trending , nowPlaying - MovieList ,MovieCard (Overflowx-scroll)

# Features

1. **Authentication** - Secure protected routes for authenticated users.
2. **Form Handling** - Efficient and user-friendly form management.
3. **Netflix + GPT Integration** - Integration with ChatGPT APIs to enhance user interaction.

- SignIn/SignUp Form
  - SignIn SignUp
  - Redirect to Browse Page
- Browse Page (After Authentication if not authenticated -> Login/SignUp)
  - Header
  - Main Movie - Trailer in background - Title and Description
  - Movies Suggestions - Movies List \* N
- Netlfix GPT
  - Search Bar
  - Movie Suggestions

App - Body -
