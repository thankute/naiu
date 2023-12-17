
import Cards from './card/Card'
import { ImageGallery } from './image-gallery/Index'

function Home() {
  return (
    <div style={{ overflow: "hidden"}}>
        <section style={{ width: "100%", height: "100vh"}}>
          <Cards />
        </section>
        <section>
        <ImageGallery />
        </section>

    </div>
  )
}

export default Home