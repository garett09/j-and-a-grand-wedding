# TAN Font Files

Place your licensed TAN font files in this directory to use the official wedding fonts.

## Required Font Files

Please add the following font files (WOFF2 format preferred, WOFF also supported):

### TAN Aegan (Display/Headings)
- `TAN-Aegan.woff2` (or `.woff`)
- `TAN-Aegan-Italic.woff2` (or `.woff`) - optional but recommended

### TAN Mon Cheri (Script/Romantic Text)
- `TAN-MonCheri.woff2` (or `.woff`)

### TAN Pearl (Decorative Elements)
- `TAN-Pearl.woff2` (or `.woff`)

### TAN Parfait (Body Text)
- `TAN-Parfait.woff2` (or `.woff`)
- `TAN-Parfait-Italic.woff2` (or `.woff`) - optional but recommended

## How to Add Fonts

1. **Obtain licensed font files** from TanType/Creative Market
2. **Convert to web formats** if needed (use tools like [transfonter.org](https://transfonter.org/))
3. **Place files** in this `/public/fonts/` directory
4. **Uncomment @font-face declarations** in `app/globals.css`
5. **Update file paths** in `@font-face` if your file names differ

## Font Usage in Website

- **font-display** (TAN Aegan): Used for major headings, names, section titles
- **font-script** (TAN Mon Cheri): Used for romantic phrases like "Let's celebrate love..."
- **font-decorative** (TAN Pearl): For decorative text elements (if needed)
- **font-serif** (TAN Parfait): Used for body text and event details

Until font files are added, the website uses elegant fallback fonts (Bodoni Moda, Cormorant Garamond) that closely match the design aesthetic.
