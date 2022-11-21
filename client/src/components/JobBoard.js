import JobList from './JobList'
import { getJobs } from '../graphql/queries'
import { useEffect, useState } from 'react'

getJobs()

function JobBoard() {
  const [jobs, setJobs] = useState([])
  useEffect(() => {
    console.log('mounted')
    getJobs().then(setJobs)
  }, [])

  console.log(jobs)
  return (
    <div>
      <h1 className="title">Job Board</h1>
      <JobList jobs={jobs} />
    </div>
  )
}

export default JobBoard
