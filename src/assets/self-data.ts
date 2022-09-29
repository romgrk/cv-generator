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
    { name: 'Rust',       value: 8 },
    { name: 'Python',     value: 8 },
    { name: 'Assembly',   value: 6 },
    { name: 'Java',       value: 6 },
  ],

  about:
    `I have a wide range of interests at all levels of the stack, from electronics
    & OS programming up to language parsing & UI/UX dev.
    I value simplicity above all other qualities in programming.
    I also have an eye for web design, as demonstrated by this document.`,

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
      position: 'Senior Software Engineer',
      details: [
        `Creation of a performance-focused analytics database in C++,
        and of an Express/React SaaS platform, including integration & unit testing.
        Designing the architecture of our servers & our devops/orchestration processes.`
      ],
      tags: ['C++', 'Typescript', 'NodeJS', 'React', 'Cypress', 'Jest'],
    },
    {
      name: 'Canadian Center for Computational Genomics (McGill)',
      date: '2017–2021',
      position: 'Full-stack Developer',
      details: [
        `Creation of web apps and CLI tools for research projects in bioinformatics & genomic analysis.
        Architecture & development of a lab management software to track samples.
        Deployment of software on HPC clusters (CalculQuébec).`
      ],
      tags: ['NodeJS', 'Python', 'C', 'PostgreSQL'],
    },
    {
      name: 'Objectif Lune',
      date: '2016–2017',
      position: 'Solutions Developer',
      details: [
        `Creation of web and mobile apps (frontend and backend) with the in-house development products.`
      ],
      tags: ['React', 'NodeJS', 'Apache Cordova', 'Mobile'],
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
      name: 'pg_fzy',
      link: 'https://github.com/romgrk/pg_fzy',
      description: `A native C extension for the PostgreSQL database, to use the FZY algorithm`,
      tags: ['C', 'PostgreSQL'],
    },
    {
      name: 'web-toolkit',
      link: 'https://github.com/romgrk/web-toolkit',
      description: 'A web UI framework based on GTK\'s Adwaita theme',
      tags: ['JavaScript', 'React'],
    },
    {
      name: 'physic_engine',
      link: 'https://github.com/romgrk/physic_engine',
      description: `A 2D physic simulator for solid objects and handling collisions, gravity, friction, etc.`,
      tags: ['Java', 'XML'],
    },
    // {
    //   name: 'fzy-lua-native',
    //   link: 'https://github.com/romgrk/fzy-lua-native',
    //   description: 'LuaJIT FFI bindings to use the natively compiled FZY implementation in Lua',
    //   tags: ['LuaJIT', 'FFI', 'C'],
    // },
  ],
} as CV

export default data
