const policies = {
  'default-src': ["'self'"],
  'script-src': [
    "'self'",
    "'unsafe-inline'",
    "'unsafe-eval'", 
    'https://checkout.stripe.com',
    'https://js.stripe.com',
    'https://maps.googleapis.com',
  ],
  'child-src': ["'self'"],
  'style-src': [
    "'self'", 
    "'unsafe-inline'", 
    'https://fonts.googleapis.com',
  ],
  'img-src': [
    "'self'",
    'data:', // Autorise les images en base64
    'https://raw.githubusercontent.com', 
    'https://res.cloudinary.com',
    'https://cdn.prod.website-files.com',
    'https://lh3.googleusercontent.com',
    'https://maps.googleapis.com',
    'https://images.unsplash.com/',
  ],
  'font-src': [
    "'self'",
    'data:', // Autorise les polices en base64
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://res.cloudinary.com', // Ajouté pour autoriser les polices depuis Cloudinary
  ],
  'frame-src': [
    "'self'",
    'https://checkout.stripe.com',
    'https://js.stripe.com',
    'https://hooks.stripe.com',
  ],
  'connect-src': [
    "'self'",
    'https://checkout.stripe.com',
    'https://api.stripe.com',
    'https://maps.googleapis.com',
    'https://res.cloudinary.com',
  ],
  'media-src': ["'self'", 'data:', 'https://res.cloudinary.com'],
  'object-src': ["'none'"], // Sécurité supplémentaire pour empêcher les attaques XSS
};

module.exports = Object.entries(policies)
  .map(([key, value]) => {
    if (Array.isArray(value)) {
      return `${key} ${value.join(' ')}`;
    }
    return '';
  })
  .join('; ');
