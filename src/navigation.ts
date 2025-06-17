import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Features',
      href: getPermalink('/services'),
    },
    // {
    //   text: 'About',
    //   href: getPermalink('/about'),
    // },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [
    {
      variant: 'primary',
      text: 'Request Demo',
      href: getPermalink('/contact'),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        {
          text: 'Features',
          href: getPermalink('/services'),
        },
        {
          text: 'Request Demo',
          href: getPermalink('/contact'),
        },
      ],
    },
    {
      title: 'Contact',
      links: [
        {
          text: 'Get in Touch',
          href: getPermalink('/contact'),
        },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Contact', href: getPermalink('/contact') },
    { text: 'Services', href: getPermalink('/services') },
  ],
  socialLinks: [],
  footNote: `© ${new Date().getFullYear()} Omega Innovations. All rights reserved.`,
};