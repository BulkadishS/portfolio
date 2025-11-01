// todo лист
// 1. посмотреть видос и по нему написать
// 2. пох если будут костыли вывезеш
// 3. сделать с аккордеон данные через data.js

// import React from 'react'
// import { Layout } from 'antd'
// import { backgroundStyle } from './data.js'
// import AppHeader from './components/layout/AppHeader'
// import AppContent from './components/layout/AppContent.jsx'
// import AppFooter from './components/layout/AppFooter.jsx'


// export default function App() {
//   return (
//     <Layout style={backgroundStyle}>
//       <AppHeader />
//       <Layout>
//         <AppContent />
//       </Layout>
//       <AppFooter />
//     </Layout>
//   )
// }

import React from 'react'
import ConnectForm from './components/ConnectForm/ConnectForm'

export default function App() {
  return (
    <div>
      <ConnectForm />
    </div>
  )
}