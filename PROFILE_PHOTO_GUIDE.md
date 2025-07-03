# Adding Your Profile Photo

To add your profile photo to the portfolio:

1. **Prepare your photo:**
   - Use a square aspect ratio (1:1) for best results
   - Recommended size: 400x400 pixels or higher
   - Supported formats: .jpg, .jpeg, .png, .webp
   - Make sure the photo is well-lit and professional

2. **Add the photo:**
   - Replace the placeholder file `public/profile-photo.jpg` with your actual photo
   - Keep the same filename: `profile-photo.jpg`
   - Or rename your photo to `profile-photo.jpg`

3. **Alternative method:**
   - If you want to use a different filename, update the `src` attribute in both:
     - Hero section (around line 68)
     - About section (around line 104)
   - Change `/profile-photo.jpg` to `/your-photo-name.jpg`

4. **Fallback:**
   - If the image fails to load, it will automatically show a gradient background with your initial "R"
   - This ensures your portfolio always looks professional

## Example:
```javascript
<img 
  src="/your-custom-photo-name.jpg" 
  alt="Raghuram - Profile Photo" 
  className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-300"
/>
```

Your photo will appear in both the hero section (larger) and about section (smaller) with a beautiful gradient border and hover effects.
