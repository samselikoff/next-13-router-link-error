# Next 13 Router link error

I'm seeing a bug when a page other than the index is visited for the first time, and then navigated to later.

## Steps to reproduce

1. Clone repo, `npm install` and `npm run dev`
2. Visit `localhost:3000`. Click "About" link at top, and then click "Home". Notice everything works.
3. Now, start the app on `/about` route and refresh. Then click "Home", and then click "About" again. You'll see this error:

    ![image](https://user-images.githubusercontent.com/2922250/194715627-7f895750-e30d-4475-9828-afe69bdd4fb5.png)

That's it! Not sure if I'm doing something wrong or if it's a bug.
