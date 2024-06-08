import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

//creates a variable that stores routes that are public to all users
const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)", "/"]);

//If the route isnt in the isPublicRoute array then it needs auth to access it
export default clerkMiddleware((auth, req) => {
  if (!isPublicRoute(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
