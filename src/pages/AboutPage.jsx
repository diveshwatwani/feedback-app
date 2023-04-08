import Card from "../components/shared/Card"
import {Link} from 'react-router-dom'
function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About this project</h1>
            <p>This is a react application made by D.W to give feedback</p>
            <p>Version: 1.0.1</p>
            <p><Link to="/">Back to home</Link></p>
        </div>
    </Card>
  )
}

export default AboutPage
