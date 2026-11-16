# Recipe_frontend
A fun frontend for finding and saving recipes!!
## Pre setup
1. Go to the <a href=https://spoonacular.com/food-api>Spoonacular API </a> and click "Get a free API key". This will prompt you to make an account and will give you an API key
2. Use these commands to copy the repo
```bash
git clone https://github.com/yuhdotpng/Recipe_Frontend.git
cd Recipe_frontend
code .
```
## Setup Instructions
1. Use this in the terminal to get into the app portion of the directory:
```bash
cd Recipe_App
```
3. Install dependencies: `npm install`
4.  Create a `.env` file in the root directory and input the following code:
```bash
VITE_SPOONACULAR_API_KEY= YOUR_API_KEY_HERE
SPOONACULAR_BASE_URL= https://api.spoonacular.com/recipes/complexSearch
```
5. Start the App `npm run dev`
6. App should be running at: `http://localhost:5173/`
7. Either ctrl+click the link in the terminal to get it showing in VS Code or copy it into your web browser and have fun!
