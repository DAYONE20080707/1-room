import Performance from "@/components/main/Performance"
import PostCodeForm from "@/components/main/PostCodeForm"
import PostCodeFormCTA from "@/components/main/PostCodeFormCTA"
import Question from "@/components/main/Question"
import Reason from "@/components/main/Reason"
import Step from "@/components/main/Step"
import Top from "@/components/main/Top"
import Useful from "@/components/main/Useful"

// メインページ
const Home = () => {
  return (
    <div>
      <Top />
      <PostCodeForm />
      <div id="reason">
        <Reason />
      </div>
      <PostCodeFormCTA />
      <div className="bg-white">
        <div id="performance">
          <Performance />
        </div>
        <PostCodeFormCTA />
        <div id="step">
          <Step />
        </div>
        <div id="useful">
          <Useful />
        </div>
        <div id="question">
          <Question />
        </div>
        <PostCodeFormCTA />
      </div>
    </div>
  )
}

export default Home
