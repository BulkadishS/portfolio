export const backgroundStyle = {
  background: `
      radial-gradient(circle at bottom right, rgb(255, 205, 111) -20%, rgb(33, 119, 176) 50%, transparent 70%),
      radial-gradient(circle at top left, rgb(255, 205, 111) 0%, rgb(33, 119, 176) 20%, transparent 100%),
      radial-gradient(circle at center, rgb(255, 205, 111) 0%, rgb(33, 119, 176) 10%, transparent 70%) 
    `,
  backgroundRepeat: 'no-repeat',
}

export const navItems = [
  {
    key: '1',
    label: 'Über uns'
  },
  {
    key: '2',
    label: 'Sicherheit'
  },
  {
    key: '3',
    label: 'Zahlungsmethoden'
  }
]

export const aboutItems = [
  {
    key: '1',
    label: 'Über unser VPN',
    content: `
       Wir haben ein VPN entwickelt,
       für dessen Nutzung Sie kein Profi sein müssen.
       Wir kümmern uns nicht nur um Ihren Komfort,
       sondern auch um Ihre Sicherheit.
    `
  },
  {
    key: '2',
    label: 'Ihre Sicherheit',
    content: `
       Sie werden nicht mit Spam-Mails belästigt,
       und Ihre Daten werden NIEMALS an Dritte weitergegeben.
       Ihre Sicherheit ist unsere Pflicht.
    `
  },
  {
    key: '3',
    label: 'Wie kann ich bezahlen?',
    content: `
       Wir akzeptieren nicht nur Euro und Dollar,
       sondern auch Kryptowährungen
       und viele andere Zahlungsmethoden.
    `
  },
  {
    key: '4',
    label: 'Einfachheit',
    content: `
       Bei uns ist alles ganz einfach: 
       Geben Sie uns Ihren einzigartigen Telegram-„@“-Namen, 
       bezahlen Sie den Service, und Sie benötigen keine Passwörter und Bestätigungen mehr. 
       Ihr Telegram-Konto ist Ihr persönliches Konto in unserem VPN.      
    `
  }
]