export const backgroundStyle = {
  background: `
      radial-gradient(circle at bottom right, rgb(255, 205, 111) -20%, rgb(33, 119, 176) 50%, transparent 70%),
      radial-gradient(circle at top left, rgb(255, 205, 111) 0%, rgb(33, 119, 176) 20%, transparent 100%),
      radial-gradient(circle at center, rgb(255, 205, 111) 0%, rgb(33, 119, 176) 10%, transparent 70%) 
    `,
  backgroundRepeat: 'no-repeat',
}

export const headerStyle = {
  width: '100%',
  textAlign: 'center',
  color: '#fff',
  height: 74,
  paddingLeft: '100px',
  paddingRight: '400px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  ... backgroundStyle
}

export const contentStyle = {
  textAlign: 'center',
  minHeight: 'calc(100vh - 74px)',
  color: '#fff',
  padding: '4rem',
  ...backgroundStyle
}

export const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: 'rgb(56, 57, 61)',
}