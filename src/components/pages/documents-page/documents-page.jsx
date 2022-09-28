import { Link } from "react-router-dom";
import { AppRoute } from "../../../const";


function DocumentsPage() {
  return (
    <div className="title-page">
      <Link to={AppRoute.Main}>На главную</Link>
      <h2 className="redirect">Документы</h2>
    </div>
  )
}

export default DocumentsPage;