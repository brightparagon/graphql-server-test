import { ObjectType, Field, ID, Resolver, Query, Arg } from 'type-graphql'
import axios from 'axios'
import { apiUrl } from '../../app'

@ObjectType()
class Program {
  [key: string]: any

  @Field((type) => ID)
  id: number

  @Field()
  uuid: string

  @Field()
  slug: string

  @Field({ nullable: true })
  titleEn: string

  @Field({ nullable: true })
  titleZhHans: string

  @Field({ nullable: true })
  titleZhHant: string

  @Field({ nullable: true })
  secondaryTitleEn: string

  @Field({ nullable: true })
  secondaryTitleZhHans: string

  @Field({ nullable: true })
  secondaryTitleZhHant: string

  @Field({ nullable: true })
  synopsisEn: string

  @Field({ nullable: true })
  synopsisZhHans: string

  @Field({ nullable: true })
  synopsisZhHant: string

  @Field({ nullable: true })
  description?: string

  @Field({ nullable: true })
  broadcastStart?: Date

  @Field({ nullable: true })
  broadcastEnd?: Date

  @Field({ nullable: true })
  numberOfEpisodes?: number

  @Field({ nullable: true })
  numberOfSeason?: number

  @Field({ nullable: true })
  urlEpisodes?: string

  @Field({ nullable: true })
  created?: Date

  @Field({ nullable: true })
  modified?: Date

  @Field()
  enable: boolean

  @Field()
  produceYear: number

  @Field((type) => Date || String)
  releaseStart: Date | string

  @Field((type) => Date || String)
  releaseEnd: Date | string

  @Field((type) => Date || String)
  publishStart: Date | string

  @Field((type) => Date || String)
  publishEnd: Date | string
}

@Resolver(Program)
export default class ProgramResolver {
  constructor() {}

  @Query((returns) => Program)
  async program(@Arg('programSlug') programSlug: string) {
    const { data: program } = await axios({
      url: `${apiUrl}/program/${programSlug}/`,
    })

    return program
  }
}
