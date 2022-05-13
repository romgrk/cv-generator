/*
 * self-data.js
 */

import { CV } from '../types'

const data = {
  name: 'Romain Grégoire',
  title: 'Software Engineer',

  contact: [
    { name: 'Email',    icon: 'RegEnvelope',    value: 'romgrk.cc@gmail.com' },
    { name: 'Phone',    icon: 'Phone',          value: '(514) 778-1580' },
    { name: 'Location', icon: 'RegAddressCard', value: 'Montréal (Qc)' },
    { name: 'Github',   icon: 'Github',         value: 'https://github.com/romgrk' },
  ],

  skills: [
    { name: 'Node.JS',    value: 10 },
    { name: 'React',      value: 10 },
    { name: 'C/C++',      value: 8 },
    { name: 'Assembly',   value: 6 },
    { name: 'Java',       value: 6 },
    { name: 'Rust',       value: 4 },
    { name: 'Go',         value: 4 },
  ],

  about:
    `I have a wide range of interests, from micro-controllers and electronics
    up to language parsing and web animation. I code for fun and a few of my personal
    projects are available on github.
    I am also comfortable in web design, as demonstrated by this document.`,

  languages: [
    { name: 'French',  level: 'Excellent' },
    { name: 'English', level: 'Excellent' },
    { name: 'Spanish', level: 'Good' },
  ],

  education: [
    {
      degree: 'Classes in Software Engineering',
      place: 'École de Technologie Supérieure',
      date: '2012–2013',
    },
    {
      degree: 'DEC, Comp. Sc. & Mathematics',
      place: 'Collège de Maisonneuve',
      date: '2009–2014',
    },
  ],

  experience: [
    {
      name: 'Comparative',
      date: '2021–now',
      position: 'Software Engineer',
      details: [
        'Implementation of a performance-focused database in C++, and implementation of a React web app for our SaaS product.',
      ],
      tags: ['C++', 'Typescript', 'React'],
    },
    {
      name: 'Canadian Center for Computational Genomics (McGill)',
      date: '2017–2021',
      position: 'Full-stack Developer',
      details: [
        'Creation of web apps and CLI tools for research projects in bioinformatics & genomic analysis.'
      ],
      tags: ['NodeJS', 'Python', 'C'],
    },
    {
      name: 'Objectif Lune',
      date: '2016–2017',
      position: 'Solutions Developer',
      details: [
        `Creation of web and mobile apps (frontend and backend) with the in-house development products.`
      ],
      tags: ['SASS', 'Webpack', 'React', 'NodeJS'],
    },
    {
      name: 'DEC Synthesis Project',
      date: '2012',
      position: 'Student',
      details: [
        `Creation of a physic engine simulator in 2D, applied to solid objects and handling collisions, gravity, friction, etc.`
      ],
      tags: ['Java', 'XML'],
      link: 'https://github.com/romgrk/physic_engine',
    },
  ],

  projects: [
    {
      name: 'node-gtk',
      link: 'https://github.com/romgrk/node-gtk',
      description: 'GTK+ bindings for NodeJS, via GObject introspection',
      tags: ['C++', 'JavaScript', 'V8', 'GLib'],
    },
    {
      name: 'web-toolkit',
      link: 'https://github.com/romgrk/web-toolkit',
      description: 'A web UI framework based on GTK\'s Adwaita theme',
      tags: ['JavaScript', 'React'],
    },
  ],
} as CV

export default data
