// import express

const express = require('express')
const database = {
  orders: [
    {
      tjmHt: 1200,
      nbJours: 20,
      tva: 20,
      state: 'OPTION',
      typePresta: 'formation',
      client: 'Capgemini2',
      comment: 'no',
      id: 1,
    },
    {
      tjmHt: 1200,
      nbJours: 10,
      tva: 20,
      state: 'CONFIRMED',
      typePresta: 'formation',
      client: 'Modis',
      comment: 'fgddhf',
      id: 2,
    },
    {
      tjmHt: 1200,
      nbJours: 1,
      tva: 20,
      state: 'CANCELLED',
      typePresta: 'formation',
      client: 'Capgemini',
      comment: null,
      id: 3,
    },
    {
      tjmHt: 1200,
      nbJours: 12,
      tva: 20,
      state: 'CONFIRMED',
      typePresta: 'formation',
      client: 'Capgemini',
      comment: '14k',
      id: 4,
    },
    {
      tjmHt: 1200,
      nbJours: 8,
      tva: 20,
      state: 'OPTION',
      typePresta: 'coaching',
      client: 'Modis',
      comment: '10k',
      id: 5,
    },
  ],
  clients: [
    {
      state: 'INACTIVE',
      tva: 20,
      id: 1,
      name: 'Capgemini',
      totalCaHt: 120000,
      comment: 'un comment pour client modis',
    },
    {
      state: 'ACTIVE',
      tva: 20,
      id: 2,
      name: 'Modis',
      totalCaHt: 120000,
      comment: 'un comment pour client modis',
    },
    {
      tva: 20,
      state: 'INACTIVE',
      name: 'modis',
      totalCaHt: 0,
      comment: 'rsger',
      id: 3,
    },
  ],
}

const app = express()

app.get('/orders', (request, response) => {
  response.send(database.orders)
})

app.get('/clients', (request, response) => {
  response.send(database.clients)
})

// démarrer le serveur
const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
