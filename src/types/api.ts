export type TechIcon = {
  title: string
  icon: {
    url: string
  }
}

export type Modules = {
  title: string
  subtitle: string
  description: string
}

export type Button = {
  label: string
  url: string
}

export type Image = {
  url: string
  alternativeText?: string
  mime?: string
}

export type SocialLinks = {
  title: string
  url: string
}

export type Authors = {
  photo: Image
  name: string
  role: string
  socialLinks: SocialLinks[]
  description: string
}

export type Reviews = {
  id?: number
  name: string
  text: string
  photo: Image
}

export type Questions = {
  question: string
  answer: string
}

export type HeaderProps = {
  title: string
  description: string
  button: Button
  image: Image
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: Image
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type SectionConceptsProps = {
  title: string
  concepts: Array<{
    title: string
  }>
}

export type SectionModulesProps = {
  title: string
  modules: Modules[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: Button
}

export type SectionAboutUsProps = {
  title: string
  authors: Authors[]
}

export type SectionReviewsProps = {
  title: string
  reviews: Reviews[]
}

export type SectionFaqProps = {
  title: string
  questions: Questions[]
}

export type LandingPageProps = {
  logo: Image
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
