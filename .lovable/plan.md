

## Changes

### 1. Reduce spacing between homepage sections
Every section currently uses `py-24` (96px top and bottom padding = 192px total gap between sections). This will be reduced to `py-12` (48px each side), cutting the gaps in half across all five sections on the homepage.

### 2. Make header nav links pure white
The inactive nav links currently use `text-muted-foreground` which appears as a faded/light color on the dark background. These will be changed to `text-white` so they are crisp and clearly readable. The active state and hover state will also be updated accordingly.

### Technical Details

**File: `src/pages/Index.tsx`**
- Hero section: change `pb-20` to `pb-10`
- Services section (line 178): `py-24` to `py-12`
- Why ScaleGiga section (line 213): `py-24` to `py-12`
- Process section (line 262): `py-24` to `py-12`
- Featured Work section (line 302): `py-24` to `py-12`

**File: `src/components/Header.tsx`**
- Line 63: Change inactive nav link color from `text-muted-foreground` to `text-white`
- Line 63: Update hover state from `hover:text-foreground` to `hover:text-white/80`

