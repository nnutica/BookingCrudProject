import { Link } from "react-router-dom"

function About() {
    return (
        <div className="text-xl font-bold text-blue-500">
            About
            <div>
                โปรเจคนี้เกี่ยวกับ เก ชื่อแซม  ลองจ่ายเงินซื้อแซมดูสิ
                <Link to="/payment">Payment test</Link>
            </div>
        </div>


    )
}

export default About