# Static Love Museum ♥

This version is intentionally **not a form builder**.

It is a finished, clickable six-room relationship website.

## Edit your content

Open:

```text
script.js
```

At the top you will find:

```js
const MUSEUM = {
  person: "Your Favourite Person",
  yourName: "Your Name",
  relationship: "Girlfriend",

  message1: "...",
  message2: "...",
  message3: "...",

  memory: "...",

  photo: "https://your-image-url.com/photo.jpg",

  photoCaption: "...",

  letter: `...`,

  signature: "Your Name"
};
```

Change those values and deploy.

## Add your own photos

You can use any **publicly accessible image URL**.

For example:

```js
photo: "https://your-domain.com/images/our-photo.jpg"
```

If you have multiple photos, the HTML can easily be extended with additional exhibits.

### Recommended image hosting

For a GitHub Pages project, you can also put images inside:

```text
assets/
  photo1.jpg
  photo2.jpg
```

and use:

```js
photo: "./assets/photo1.jpg"
```

## Deploy to GitHub Pages

Upload these files to a GitHub repository:

```text
index.html
style.css
script.js
```

Then:

1. GitHub repository → **Settings**
2. **Pages**
3. Deploy from branch
4. Select `main`
5. Select `/ (root)`
6. Save

No npm, Node.js, database, API or backend is required.

## Navigation

The visitor can:

- Enter the museum
- Click next/previous
- Click the room dots
- Use keyboard arrow keys
- Open the sealed letter
- Restart the experience from the heart/logo

The URL changes to `#room-1`, `#room-2`, etc., so browser navigation works naturally.

## Photo URLs

The photo URL must be accessible from the browser. If your image host blocks hotlinking, the image may not appear.

For best control, keep the photos in the same GitHub repository or host them through your own S3/CloudFront domain.
