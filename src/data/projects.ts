const allImages = import.meta.glob('../assets/projects/**/*.{jpg,JPG,png,PNG,jpeg,JPEG}', {
   eager: true, 
   import: 'default'
})

console.log('ALL VITE PATHS:', Object.keys(allImages))

const getProjectGallery = (folderpath) => {
  return Object.keys(allImages)
    .filter(path => path.includes(`/${folderpath}/`))
    .map(path => allImages[path])
}

export const projects = [
  {
    slug: 'melnerage-housing-block',
    title: 'Melnerage Housing Block',
    status: 'Baigtas',
    city: 'Klaipeda, Lietuva',
    year: 2023,
    duration: '8 Months',
    scope: 'Residential Renovation',
    area: '1,200 m²',
    description:
    'The Melnerage Housing Block project included structural repairs, façade upgrades, interior fit-out works, and infrastructure improvements.',
    gallery: getProjectGallery('melnerage'),
    get heroImage() {return this.gallery[0]}
  },
  {
    slug: 'kepykla-facility',
    title: 'Kepykla Facility',
    status: 'Baigtas',
    city: 'Klaipeda, Lietuva',
    year: 2022,
    duration: '12 Months',
    scope: 'Commercial Development',
    area: '2,500 m²',
    description:
    'The Kepykla Facility project encompassed the construction of a new commercial building, including foundation work, structural framing, exterior cladding, and interior finishes.',
    gallery: getProjectGallery('kepykla'),
    get heroImage() {return this.gallery[0]}
  },
  {
    slug: 'saulės-butai-complex',
    title: 'Saules Butai Complex',
    status: 'Vykdomas',
    city: 'Klaipeda, Lietuva',
    year: 2023,
    description:
    'The Saules Butai Complex project involved the construction of a multi-unit residential building with modern amenities and sustainable design features.',
    gallery: getProjectGallery('saules-butai'),
    get heroImage() {return this.gallery[0]}
  },
  {
    slug: 'kunigiskes-renovation',
    title: 'Kunigiskes Renovacija',
    status: 'Baigtas',
    city: 'Palanga, Lietuva',
    year: 2022,
    description:
    'The Kunigiskes Renovacija project included the restoration and modernization of an existing residential building, with updates to the façade, interior finishes, and infrastructure.',
    gallery: getProjectGallery('kunigiskes-renovacija'),
    get heroImage() {return this.gallery[0]}
  },
  {
    slug: 'kunigiskes-vaivorikstes-g',
    title: 'Kunigiskes Vaivorikstes g, Namo Statyba',
    status: 'Baigtas',
    city: 'Palanga, Lietuva',
    year: 2023,
    description:
    'The Kunigiskes Vaivorikstes g project involved the construction of a new residential building with modern amenities and sustainable design features.',
    gallery: getProjectGallery('kunigiskes-vaivorikstes'),
    get heroImage() {return this.gallery[0]}
  },
  {
    slug: 'vilmiskes',
    title: 'Vilmiskes, Namo Statyba',
    status: 'Baigtas',
    city: 'Palanga, Lietuva',
    year: 2023,
    description:
    'The Vilmiskes project involved the construction of a new residential building with modern amenities and sustainable design features.',
    gallery: getProjectGallery('vilmiskes'),
    get heroImage() {return this.gallery[0]}
  },
  {
    slug: 'pasakele-darzelis',
    title: 'Pasakele Darzelis, Statyba',
    status: 'Baigtas',
    city: 'Gargždai, Lietuva',
    year: 2022,
    description:
    'The Pasakele Darzelis project involved the construction of a new childcare facility with modern amenities and sustainable design features.',
    gallery: getProjectGallery('pasakele'),
    get heroImage() {return this.gallery[0]}
  },
  {
    slug: 'english-housing',
    title: 'Anglija English Housing, Namo Statyba',
    status: 'Baigtas',
    city: 'Anglija, UK',
    year: 2023,
    description:
    'The English Housing project involved the construction of a new residential building with modern amenities and sustainable design features.',
    gallery: getProjectGallery('english-housing'),
    get heroImage() {return this.gallery[0]}
  },
  {
    slug: 'epping-nightclub',
    title: 'Anglija Epping Nightclub, Statyba',
    status: 'Baigtas',
    city: 'Anglija, UK',
    year: 2023,
    description:
    'The Epping Nightclub project involved the construction of a new entertainment venue with modern amenities and sustainable design features.',
    gallery: getProjectGallery('epping-nightclub'),
    get heroImage() {return this.gallery[0]}
  },
  {
    slug: 'slough-penthouse',
    title: 'Angliija Slough Penthouse, Butų Statyba',
    status: 'Baigtas',
    city: 'Anglija, UK',
    year: 2023,
    description:
    'The Slough Penthouse project involved the construction of a new luxury residential building with modern amenities and sustainable design features.',
    gallery: getProjectGallery('slough-penthouse'),
    get heroImage() {return this.gallery[0]}
  },
  {
    slug: 'village-house',
    title: 'Village House, Namo Statyba',
    status: 'Baigtas',
    city: 'Anglija, UK',
    year: 2023,
    description:
    'The Village House project involved the construction of a new residential building with modern amenities and sustainable design features.',
    gallery: getProjectGallery('village-house'),
    get heroImage() {return this.gallery[0]}
  },
  {
    slug: 'palangos-gatve',
    title: 'Darbėnai Palangos g, Namo Statyba',
    status: 'Baigtas',
    city: 'Darbenai, Lietuva',
    year: 2023,
    description:
    'The Palangos g project involved the construction of a new residential building with modern amenities and sustainable design features.',
    gallery: getProjectGallery('palangos-gatve'),
    get heroImage() {return this.gallery[0]}
  }]