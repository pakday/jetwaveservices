# Colors

#092E71 is the primary color, likely due to its use in the logo.
#0392BF is the secondary or accent color, also from the logo but used less prominently.

## Must follow

Use site colors with different shades or alpha values, but keep it limited: no more than six shades per color. Use only the necessary shades, not extra or forced variations.
If you think a color is missing, add it only when it is needed for this site. You understand this type of website and its context.
Please ensure good color contrast. This is very important.

# Font Family

Choose a font family that fits the style of https://www.jetwaveservices.com/. The goal is a professional, client-ready appearance.
I personally like the Outfit font family, and it may work well for this site.

# Global class naming

I added a `globals.css` file from another site to show how I use global classes. The goal is to keep everything aligned with that pattern.
Avoid hard-coded custom values; use the classes I defined instead.
Use classes for:

- sections (clamp)
- container (clamp)
- headings (clamp)
- text (Tailwind)
- max width (Tailwind)
- shadows (Tailwind)
- line height (Tailwind; additional classes may be created if needed)
- letter spacing (Tailwind)

# Cards

Use professional card styles similar to the website. Keep the card code in reusable components, including different card types, so it can be updated later without changing every page.

# Headings & Text

Use Tailwind text sizes according to the available size scale.
Use heading sizes from the global CSS file.

# Buttons

Use button classes like `btn-primary`, `btn-secondary`, `btn-accent`, `btn-outline`, and so on.
Use button size classes such as `btn-sm`, `btn-lg`, `btn-xl`, etc.
This makes button styles and sizes easy to manage.

# Structure

I added HTML pages from the client site, with file names based on the page slugs.
The HTML was cleaned of JavaScript and CSS so the content and links are easy to read.
I also added raw text for some pages.
Please follow those pages for the existing content.

# Text content

I added the HTML and text page content and I expect you to follow the client site content closely.
If any page content is thin, use similar wording and styling from the client site rather than adding unrelated dummy content.
Add content only where needed, and do not add unnecessary or excessive text.
Use your judgment to add useful, required sections, but do not ignore the existing client site content.

# Images content

I added the site logo and brand images in the public folder, but the client site does not have many strong images.
Please use Unsplash-style images that suit the content.
Do not limit yourself because the client site lacks good images.
It is better to use images in the public folder rather than relying on external image links, which may fail to load and create a poor experience.

# Code Practices

## Color Classes (Tailwind)

- Always use Tailwind utility classes for solid brand colors — never `style={{ color: "var(--color-xxx)" }}` for simple values.
- `var(--color-primary)` → `text-primary` / `bg-primary`
- `var(--color-accent)` → `text-accent` / `bg-accent`
- `var(--color-ink-muted)` → `text-ink-muted`
- `var(--color-accent-light)` + `var(--color-accent)` combined → `bg-accent-light text-accent`
- `var(--color-border)` → `border-border`
- `rgba(255,255,255,0.8)` → `text-white/80` (use Tailwind opacity modifiers)
- Keep complex `linear-gradient`, `radial-gradient`, and `backdropFilter` as inline styles — they cannot be expressed as Tailwind utilities.

## Container & Section Spacing

- Always wrap section inner content in `.container` for max-width + auto margins.
- Use `.section-s`, `.section-m`, `.section-l`, `.section-xl`, `.section-2xl`, `.section-3xl` for vertical section padding — **never** hard-code `py-16`, `py-20`, `py-24` etc.

## Hover Interactions

- Use CSS-only hover classes (`.footer-link`, `.footer-link-dim`, `.footer-heading` defined in `globals.css`) for footer link color transitions.
- Avoid `onMouseEnter` / `onMouseLeave` JS handlers for simple color changes — they require `"use client"`, add overhead, and don't work on Server Components.
- Server Components (without `"use client"`) cannot have event handler props — always use CSS `:hover` for styling.

## Logo

- Prefer the SVG logo (`/logos/jetwave-logo.svg`) over the PNG version.
- Apply `brightness-0 invert` Tailwind classes when the logo sits on a dark background.

## Navigation

- Always include all service pages in the header nav: **Phone**, **VoIP**, **Internet** under a `Services` dropdown.
- Keep `Get a Quote` and `Try Us Free` as primary CTA links in both the header and footer.
