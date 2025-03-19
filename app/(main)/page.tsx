import Performance from "@/components/main/Performance"
import PostCodeForm from "@/components/main/PostCodeForm"
import PostCodeFormCTA from "@/components/main/PostCodeFormCTA"
import Question from "@/components/main/Question"
import TopReasonList from "@/components/main/top/TopReasonList"
import TopStepList from "@/components/main/top/TopStepList"
import TopFirstView from "@/components/main/top/TopFirstView"
import Blog from "@/components/main/blog/Blog"
import { getCompanyCountByPrefecture } from "@/actions/company"
import CompanySearch from "@/components/main/blog/comanay/CompanySearch"

// メインページ
const Home = async () => {
  return (
    <div>
      <TopFirstView />
      <PostCodeForm />
      <div id="reason">
        <TopReasonList />
      </div>
      <PostCodeFormCTA />
      <div className="bg-white">
        <div id="performance">
          <Performance />
        </div>
        <PostCodeFormCTA />
        <div id="step">
          <TopStepList />
        </div>
        <div id="blog">
          <Blog />
        </div>
        <div>
          <CompanySearch />
        </div>
        <PostCodeFormCTA />
        <div id="question">
          <Question />
        </div>
      </div>
    </div>
  )
}

export default Home
