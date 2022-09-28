import { Link } from "react-router-dom";
import { AppRoute } from "../../../const";

function StatisticPage() {
  return (
    <div className="title-page">
      <Link to={AppRoute.Main}>На главную</Link>
      <h2 className="redirect">Статистика</h2>
    </div>)
}

export default StatisticPage;