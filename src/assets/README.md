# Logo Placement Instructions

## Add Your Logo Here

Place your Norscope logo file in this directory with one of these names:

- **Recommended**: `logo.svg` (SVG format - scales perfectly at any size)
- **Alternative**: `logo.png` (PNG with transparent background)

## Logo Specifications

### Dimensions
- **Height**: 32-40px (will auto-scale to 32px mobile, 40px desktop)
- **Width**: Auto (maintains aspect ratio)
- **Recommended ratio**: Horizontal logo works best (e.g., 150px wide × 40px tall)

### Format Requirements
- **SVG**: Best choice - infinite scalability, small file size
- **PNG**: Use transparent background, at least 2x resolution for retina displays (e.g., 300px × 80px for a 150px × 40px display size)

### Color
- The navigation bar has a **white background**
- Logo should be visible on white (dark colors or full-color logo)
- Avoid white or very light colored logos

## What Happens

### With Logo File
When you add `logo.svg` or `logo.png`, the navigation will automatically display your logo image.

### Without Logo File (Current State)
The text "NORSCOPE" displays as a fallback until you add your logo file.

## Location

File path: `src/assets/logo.svg` or `src/assets/logo.png`

The navigation component is already configured to load your logo automatically once you place it here!
