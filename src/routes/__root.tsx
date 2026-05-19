import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import logoUrl from "@/assets/logo.svg";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Jorge Zendejas Moran — Architecture Portfolio" },
      { name: "description", content: "Architecture portfolio of Jorge Zendejas Moran — second-year student at the Huckabee College of Architecture, Texas Tech University." },
      { name: "author", content: "Jorge Zendejas Moran" },
      { property: "og:title", content: "Jorge Zendejas Moran — Architecture Portfolio" },
      { property: "og:description", content: "Architecture portfolio of Jorge Zendejas Moran — second-year student at the Huckabee College of Architecture, Texas Tech University." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "google", content: "notranslate" },
      { name: "twitter:title", content: "Jorge Zendejas Moran — Architecture Portfolio" },
      { name: "twitter:description", content: "Architecture portfolio of Jorge Zendejas Moran — second-year student at the Huckabee College of Architecture, Texas Tech University." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c655d5a9-ea16-4edb-ad1e-8e009da9d091/id-preview-ecd1adac--4fcb072a-94dc-4139-abb8-e8bae087f0b3.lovable.app-1778127127305.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c655d5a9-ea16-4edb-ad1e-8e009da9d091/id-preview-ecd1adac--4fcb072a-94dc-4139-abb8-e8bae087f0b3.lovable.app-1778127127305.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </QueryClientProvider>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-foreground/80 bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-5 py-5 text-[11px] uppercase tracking-[0.2em] sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-6 sm:text-[13px]">
        <Link to="/" className="flex items-center gap-3 font-medium">
          <img src={logoUrl} alt="Zendmor logo" className="h-12 w-12 object-contain sm:h-14 sm:w-14" />
          <span>Jorge Zendejas Moran</span>
        </Link>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 sm:gap-x-7">
          <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "text-accent-blue" }}>Index</Link>
          <Link to="/chichu" title="Chichu Art Museum" activeProps={{ className: "text-accent-blue" }}>01</Link>
          <Link to="/lava" title="Lubbock's Academy of Visual Arts" activeProps={{ className: "text-accent-blue" }}>02</Link>
          <Link to="/retreat" title="Travelers Retreat" activeProps={{ className: "text-accent-blue" }}>03</Link>
          <Link to="/drainage" title="Lubbock's Watershed Analysis" activeProps={{ className: "text-accent-blue" }}>04</Link>
          <Link to="/about" activeProps={{ className: "text-accent-blue" }}>More About Me</Link>
        </nav>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-foreground/80">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-6 py-8 text-[11px] uppercase tracking-[0.2em] sm:flex-row sm:items-center sm:justify-between">
        <span>Portfolio</span>
        <span>jorgezendmor@gmail.com · (915) 270-7582</span>
        <span>Jorge Zendejas Moran</span>
      </div>
    </footer>
  );
}
