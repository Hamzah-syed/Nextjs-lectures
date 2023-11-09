import Link from "next/link"
import { Nav } from "../nav"

const AboutPage = () => {
    return (
        <div>

            {/* Nav("homepage") */}
            <Nav pageName="About Page" message="hello from about" />
            <h1>This is About page</h1>
        </div>
    )
}

export default AboutPage

