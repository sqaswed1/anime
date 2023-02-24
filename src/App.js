import { useState } from "react"
import { Button, Typography, Card, Image } from "antd"
const { Text } = Typography

function App() {
  const [isAnimeShown, setAnimeShown] = useState(false)
  const showAnime = () => {
    setAnimeShown(!isAnimeShown)
  }
  return (
    <>
      <Card className='app'>
        <h1>
          <Text italic type='secondary'>
            Нажмите на кнопочку для аниме
          </Text>
        </h1>
        <Button className='btn' onClick={showAnime}>
          Аниме
        </Button>
      </Card>
      {isAnimeShown ? (
        <Card className='app2'>
          <Image src='https://aniyuki.com/wp-content/uploads/2022/03/aniyuki-cute-anime-avatar-profile-picture-14.jpg' />
        </Card>
      ) : undefined}
    </>
  )
}

export default App
