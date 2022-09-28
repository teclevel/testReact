import { Link, Outlet } from "react-router-dom";
import { AppRoute } from "../../../const";
import Footer from "../../footer/footer";
import style from './layout.module.css'

function Layout() {
  return (
    <div className={style.pageDesk}>
      <header className={style.header}>
        <nav className={[style.center, style.nav].join(' ')}>
          <Link to={AppRoute.Statistic}>Статистика</Link>
          <Link to={AppRoute.Documents}>Документы</Link>
          <Link to={AppRoute.Expert}>Экспертный совет</Link>
          <Link to={AppRoute.Publication}>Публикации</Link>
          <Link to={AppRoute.About}>О проекте</Link>
        </nav>
      </header>
      <main className={style.center}>
        <Outlet />
      </main>
      <Footer center={style.center} />
    </div>
  )
}

export default Layout;