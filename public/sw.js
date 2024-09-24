self.addEventListener('push', function (event) {
  if (event.data) {
    try {
      const data = event.data.json() // Essayer de parser les données en JSON
      const options = {
        body: data.body,
        icon: data.icon || '/icon.png',
        badge: '/badge.png',
        vibrate: [100, 50, 100],
        data: {
          dateOfArrival: Date.now(),
          primaryKey: '2',
        },
      }
      event.waitUntil(self.registration.showNotification(data.title, options))
    } catch (error) {
      console.error('Erreur lors de l\'extraction des données de la notification:', error)
    }
  } else {
    console.warn('Aucune donnée reçue dans cet événement push.')
  }
})


self.addEventListener('notificationclick', function (event) {
  console.log('Notification click received.')
  event.notification.close()
  event.waitUntil(clients.openWindow('https://komandgo.fr/'))
})