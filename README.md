# Stateless Hack Landing Page

## Customization

### Form Integration

The form currently logs data to console. To integrate with a backend:

1. **Typeform**: Use their embed API or webhook
2. **Google Forms**: Create a form and use the action URL
3. **Netlify Forms**: Add `netlify` attribute to form tag
4. **Custom API**: Replace the fetch URL in the submit handler

### Domain Setup

1. Register your domain
2. Point DNS to GitHub Pages:
   - 4 A records to: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - Or CNAME record to: yourusername.github.io
3. Add CNAME file with your domain name

## File Structure

```
stateless-hack-landing/
├── index.html              # Main landing page
├── assets/
│   ├── css/
│   │   └── style.css       # Styles and responsive design
│   ├── js/
│   │   └── script.js       # Interactive functionality
│   └── images/             # Images and icons (empty, uses CSS/Unicode)
├── CNAME                   # Domain configuration for GitHub Pages
└── README.md               # This file
```

## SEO Optimization

The page includes:
- Meta description and title tags
- Open Graph tags for social sharing
- Structured semantic HTML
- Fast loading times
- Mobile-responsive design

## Browser Support

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+
