import { Company, Job } from './db.js'

export const resolvers = {
  Query: {
    company: (root, { id }) => Company.findById(id),
    job: (root, { id }) => Job.findById(id),
    jobs: () => Job.findAll()
  },

  Mutation: {
    createJob: (_root, { input }) => Job.create(input)
  },

  Company: {
    jobs: (company) => Job.findAll((job) => job.companyId === company.id)
  },

  Job: {
    company: (job) => {
      return Company.findById(job.companyId)
    }
  }
}
