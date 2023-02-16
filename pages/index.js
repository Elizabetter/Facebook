import Header from "../components/Header"
import Navigation from "../components/Navigation"
import MainContent from "../components/MainContent"
import Complementary from "../components/Complementary"

const Home = () => {
  return(
    <div class="bg-light-grey min-h-screen min-w-full">
    <Header/>
    <div class="flex flex-row mt-4">
      <Navigation></Navigation>
      <MainContent></MainContent>
      <Complementary></Complementary>
    </div>
</div>
  )
}

export default Home
