import { Link } from "react-router-dom";
import { AppRoute } from "../../../const";

function PublicationPage() {
  return (
    <div className="title-page">
      <Link to={AppRoute.Main}>На главную</Link>
      <h2 className="redirect">Публикации</h2>
    </div>)
}

export default PublicationPage;