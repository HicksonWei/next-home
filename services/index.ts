import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getBioItems = async () => {
  const query = gql`
    query BioQuery {
      bios {
        id
        name
        title
        year
        description
      }
    }
  `

  const result = await request(graphqlAPI as string, query)

  return result.bios
}

export const getSkillItems = async () => {
  const query = gql`
    query SkillQuery {
      skills {
        id
        description
      }
    }
  `

  const result = await request(graphqlAPI as string, query)

  return result.skills
}

export const getWorkItems = async () => {
  const query = gql`
    query WorkQuery {
      works {
        id
        name
        img {
          id
          url
        }
        siteUrl
        duty
        description
        active
        category
      }
    }
  `

  const result = await request(graphqlAPI as string, query)

  return result.works
}

export const getLinkItems = async () => {
  const query = gql`
    query LinkQuery {
      links {
        id
        name
        href
      }
    }
  `

  const result = await request(graphqlAPI as string, query)

  return result.links
}

export const getOgImageLink = async () => {
  const query = gql`
    query ImageQuery {
      images {
        social {
          id
          url
        }
      }
    }
  `

  const result = await request(graphqlAPI as string, query)

  return result.images
}
