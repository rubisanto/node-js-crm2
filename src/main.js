// import express

const express = require('express')
const database = {
  orders: [
    {
      id: 1,
      typePresta: 'Formation',
      designation: 'Formation React.js',
      clientId: 1,
      nbDays: 8,
      unitPrice: 600,
      totalExcludeTaxe: 4800,
      totalWithTaxe: 5760,
      state: 1,
    },
    {
      id: 2,
      typePresta: 'Dev',
      designation: 'Techlead React.js',
      clientId: 1,
      nbDays: 10,
      unitPrice: 600,
      totalExcludeTaxe: 6000,
      totalWithTaxe: 7200,
      state: 1,
    },
  ],
  clients: [
    {
      id: 1,
      companyName: 'Capg',
      firstName: 'Jordan',
      lastName: 'Lugard',
      email: 'jordan.lugard@capg.com',
      phoneNumber: '+3367676764',
      address: 'Quelque part',
      zipCode: '48334',
      country: 'France',
      state: 0,
    },
    {
      id: 2,
      companyName: 'Netflix',
      firstName: 'Mickael',
      lastName: 'Véril',
      email: 'mika.veril@netflix.com',
      phoneNumber: '+3367676767',
      address: 'New york',
      zipCode: '11111',
      country: 'USA',
      state: 1,
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

// trouver un client en particulier
app.get('/clients/:id', (request, response) => {
  const id = parseInt(request.params.id)
  const client = database.clients.find((client) => client.id === id)
  if (!client) {
    return response.status(404).send('Client not found')
  }
  response.send(client)
})

// trouver une commande en particulier
app.get('/orders/:id', (request, response) => {
  const id = parseInt(request.params.id)
  const order = database.orders.find((order) => order.id === id)
  if (!order) {
    return response.status(404).send('Order not found')
  }
  response.send(order)
})

// lister toutes les prestations pour un client donné
app.get('/clients/:id/orders', (request, response) => {
  const id = parseInt(request.params.id)
  const orders = database.orders.filter((order) => order.clientId === id)
  if (!orders) {
    return response.status(404).send('Orders not found')
  }
  response.send(orders)
})

// Supprimer un client ainsi que toutes ses prestations
app.delete('/clients/:id', (request, response) => {
  const id = parseInt(request.params.id)
  const client = database.clients.find((client) => client.id === id)
  if (!client) {
    return response.status(404).send('Client not found')
  }
  database.clients = database.clients.filter((client) => client.id !== id)
  database.orders = database.orders.filter((order) => order.clientId !== id)
  response.send('Client deleted')
})

// Supprimer une prestation spécifique
app.delete('/orders/:id', (request, response) => {
  const id = parseInt(request.params.id)
  const order = database.orders.find((order) => order.id === id)
  if (!order) {
    return response.status(404).send('Order not found')
  }
  database.orders = database.orders.filter((order) => order.id !== id)
  response.send('Order deleted')
})

// Ajouter un client
app.post('/clients', (request, response) => {
  const client = request.body
  if (!client) {
    return response.status(400).send('Client is required')
  }
  database.clients.push(client)
  response.send('Client added')
})

// démarrer le serveur
const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
