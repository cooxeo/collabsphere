import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define your public and ignored routes
const isPublicRoute = createRouteMatcher([
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/api/webhook/clerk',
]);
const isIgnoredRoute = createRouteMatcher(['/api/webhook/clerk']);

export default clerkMiddleware(async (auth, request) => {
  console.log('Incoming request:', request.url); // Log the incoming request URL

  // Check if the route is ignored and skip middleware if it matches
  if (isIgnoredRoute(request)) {
    console.log('Ignoring route:', request.url);
    return;
  }

  // Protect routes unless they are public
  if (!isPublicRoute(request)) {
    console.log('Protecting route:', request.url);
    await auth.protect();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
