import { Link } from "react-router-dom";
import { AppRoute } from "../../../const";

function ExpertPage() {
  return (
    <div className="title-page">
      <Link to={AppRoute.Main}>На главную</Link>
      <h2 className="redirect">Экспертный совет</h2>
    </div>
  )
}

export default ExpertPage;