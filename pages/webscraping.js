const PORT = 8000

const axios = require('axios')
const express = require('express')
const cheerio = require('cheerio')

const exp = express()


const url = "https://www.linkedin.com/jobs/"


axios(url).then(response =>{
  const hmtl = response.data
  const all_elements = cheerio.load(html)
  const jobs = []
  all_elements('.full-width artdeco-entity-lockup__title ember-view', html).each(function() 
  {
    const url_found = all_elements(this).find('a').attr('href')
    const title = all_elements(this).find('a').attr('aria-label')
    jobs.push({
      title,
      url_found
    })
  })

  console.log(jobs)

}).catch(err => console.log(err))

exp.listen(PORT, () => console.log(`server running on PORT ${PORT}`))
