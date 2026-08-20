import { allProjects, projectCategories, projectReelItems } from './allProjects';
import { showcaseProjects } from './showcaseProjects';
import { buildLog, credentials, experienceGallery, profile, toolkit } from './portfolio';

const featuredByDetailId = Object.fromEntries(
  showcaseProjects.map((project, index) => [project.detailId, { ...project, featuredOrder: index }]),
);

const normalizedProjects = allProjects.map((project) => {
  const featured = featuredByDetailId[project.id];
  return {
    ...project,
    thumbnail: project.thumbnail || featured?.image || null,
    visual: project.visual || featured?.visual || 'product',
    featured: Boolean(featured),
    featuredOrder: featured?.featuredOrder ?? null,
  };
});

export const defaultSections = {
  site: {
    profile: { ...profile },
    hero: {
      title: 'Kyann Tagle',
      role: 'Full-stack developer exploring data, privacy, and cryptography.',
    },
    about: {
      kicker: 'A little more',
      title: 'Curious by default.\nBuilder by habit.',
      cardSummary: 'Quiet at first. Curious always. Serious about finishing what I start.',
      body: 'I’m Kyann, a fourth-year Computer Science student from Manila and Cavite. I listen before I jump in, learn fastest by making things, and tend to stay with a problem until it works. I’m looking for an internship or junior role where I can take ownership, keep learning, and help a thoughtful team ship useful work.',
      kpis: [
        { value: '900+', label: 'community members reached' },
        { value: '20', label: 'certificates earned' },
        { value: '20', label: 'projects built' },
      ],
    },
    contact: {
      availability: 'Open to internships, freelance projects, and collaborations',
      locationLine: 'Philippines · available worldwide',
      title: 'Tell me what you’re\ntrying to make.',
      body: 'A role, a product, a collaboration, or even a half-formed idea. Send me the context and I’ll get back to you myself.',
    },
  },
  projects: {
    categories: [...projectCategories],
    items: normalizedProjects,
  },
  carousel: {
    items: projectReelItems.map((item) => ({ ...item })),
  },
  journey: {
    items: buildLog.map((item) => ({ ...item, bullets: [...item.bullets] })),
    gallery: experienceGallery.map((item) => ({ ...item })),
  },
  reviews: {
    items: [
      {
        id: 'client-review',
        label: 'Client review',
        quote: 'A client note will live here once I have permission to share it publicly.',
        person: 'Reviewer name',
        role: 'Client / organization',
        profileUrl: profile.linkedin,
        image: null,
        status: 'Pending',
      },
      {
        id: 'team-review',
        label: 'Team review',
        quote: 'A teammate’s perspective will go here, linked directly to their public profile.',
        person: 'Reviewer name',
        role: 'Teammate / organization',
        profileUrl: profile.linkedin,
        image: null,
        status: 'Pending',
      },
      {
        id: 'collaborator-review',
        label: 'Collaborator review',
        quote: 'A collaborator’s honest take will appear here after they approve the final wording.',
        person: 'Reviewer name',
        role: 'Collaborator / project',
        profileUrl: profile.linkedin,
        image: null,
        status: 'Pending',
      },
    ],
  },
  toolkit: {
    items: toolkit.map((group) => ({ ...group, items: [...group.items] })),
  },
  certificates: {
    items: credentials.map((credential, index) => ({ ...credential, recordId: `certificate-${index + 1}` })),
  },
};

export const sectionLabels = {
  site: 'Site details',
  projects: 'Projects',
  carousel: 'Project carousel',
  journey: 'Journey & gallery',
  reviews: 'Reviews',
  toolkit: 'Tech stack',
  certificates: 'Certificates',
};

export function cloneDefaultSections() {
  return structuredClone(defaultSections);
}

export function mergePortfolioSections(remoteSections = {}) {
  const defaults = cloneDefaultSections();
  return {
    site: {
      ...defaults.site,
      ...remoteSections.site,
      profile: { ...defaults.site.profile, ...remoteSections.site?.profile },
      hero: { ...defaults.site.hero, ...remoteSections.site?.hero },
      about: { ...defaults.site.about, ...remoteSections.site?.about },
      contact: { ...defaults.site.contact, ...remoteSections.site?.contact },
    },
    projects: { ...defaults.projects, ...remoteSections.projects },
    carousel: { ...defaults.carousel, ...remoteSections.carousel },
    journey: { ...defaults.journey, ...remoteSections.journey },
    reviews: { ...defaults.reviews, ...remoteSections.reviews },
    toolkit: { ...defaults.toolkit, ...remoteSections.toolkit },
    certificates: { ...defaults.certificates, ...remoteSections.certificates },
  };
}
