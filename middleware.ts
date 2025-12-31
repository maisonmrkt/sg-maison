import { authMiddleware } from "@clerk/nextjs";

// This middleware protects routes and redirects unauthenticated users
// See: https://clerk.com/docs/references/nextjs/auth-middleware

export default authMiddleware({
  // Routes that can be accessed while signed out
  publicRoutes: ["/"],
  
  // Routes that should always be accessible (API routes, webhooks, etc.)
  ignoredRoutes: ["/api/webhooks(.*)"],
});

export const config = {
  // Match all routes except static files and Next.js internals
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
