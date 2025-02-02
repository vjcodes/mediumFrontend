import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Blog from "./pages/Blog"
import LandingPage from "./pages/LandingPage"
import AllBlogs from "./pages/AllBlogs"
import Publish from "./pages/Publish"

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/blogs" element={<AllBlogs />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/publish" element={<Publish />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App