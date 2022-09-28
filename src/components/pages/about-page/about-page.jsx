import { Link } from "react-router-dom";
import { AppRoute } from "../../../const";

function AboutPage() {
  return (
    <div className="title-page">
      <Link to={AppRoute.Main}>На главную</Link>
      <h2 className="redirect">О проекте</h2>
    </div>
  )
}

export default AboutPage;