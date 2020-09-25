import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div class="container">
    <h1>Olá</h1>

    </div>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <div>
      <Image />
    </div>

    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>


)

export default IndexPage
