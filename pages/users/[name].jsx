import fetch from 'isomorphic-unfetch'

const name = ({ user }) => {
  const username = user && user.name
  return <div>{username}</div>
}

export const getServerSideProps = async () => {
  try {
    const res = await fetch('https://api.github.com/users/Stulta-Amiko')
    if (res.status === 200) {
      const user = await res.json()
      return { props: { user } }
    }
    return { props: {} }
  } catch (e) {
    console.log(e)
    return { props: {} }
  }
}

export default name