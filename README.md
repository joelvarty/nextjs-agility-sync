# Next.js + Agility CMS Sync + SSG

# Get Started

Sign up for an [Agility CMS Blog Starter](https://account.agilitycms.com/sign-up?product=agility-free) instance.

1. Clone this repository
2. Run `npm install`
3. Run `npm run dev`
4. Modify the `agility.config.js` and place your own _guid_ and _apiKeys_ (if you want to test this with your own instance - must be using the Blog Template) - you can also run it with the sandbox credentials provided

# Test SSG Local

```
npm run deploy
```

Check the ./out folder...

Use a simple http server to test.

```
http-server ./out
```

# Deploy

Create a Vercel Account...

# Notes

## How to Properly Link to a Page

Because we are using _dynamic pages_ along with a catch-all route in Next.js, you'll need to use the following `<Link>` method to properly provide links to other dynamic pages while still having the client-side router pick them up. There is a current [issue](https://github.com/zeit/next.js/issues/8207) (as of v9.21) open for this for Next.js to handle it better, but for now you'll need to do this:

```javascript
import Link from "next/link";

//where '[...slug]' is the catch-all dynamic page we have (pages/[...slug].js)
// and '/posts' is the actual real page path for the page
<Link href="[...slug]" as="/posts">
	<a>{item.fields.title}</a>
</Link>;
```

## How to Preview Content?

Since this is a static app, how can editors preview content in realtime as they are making them in the CMS? Zeit Now apparantly will support a great way to do this, but until then, you can run this in development mode (`npm run dev`) in a container on a web server. This ensures that the requests for each page are done at runtime.

> Native support for Preview with NextJS/Zeit is now enabled, documentation coming soon.

This repo is set up work with Azure Dev Ops (_azure-pipelines.yml_) and Docker (\_DockerFile). This allows you to use Docker to build an image, and then push it to the Azure Container Registry of your choice. An Azure App Service that you setup would simply use the Registry to enable Continuous Deployment.
