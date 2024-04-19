export const navbarLinks = [
  {
    href: '/products',
    text: 'Products',
  },
  {
    href: '/pricing',
    text: 'Pricing',
  },
  {
    href: '/clients',
    text: 'Clients',
  },
  {
    href: '/resources',
    text: 'Resources',
  },
  {
    href: '/documentation',
    text: 'Documentation',
  },
  {
    href: '/enterprise',
    text: 'Enterprise',
  },
];

export const clients = [...new Array(10)].map((client, idx) => ({
  href: `/images/client-${idx + 1}.png`,
}));
