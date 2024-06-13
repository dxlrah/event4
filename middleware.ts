import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    '/', // Public routes accessible without authentication
    '/events/:id',
    '/api/uploadthing'
  ],
  ignoredRoutes: [
    '/api/webhook/clerk', // Ignored routes not processed by middleware
    '/api/webhook/stripe'
  ]
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
