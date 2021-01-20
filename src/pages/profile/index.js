import React from "react";
import Menu from "./components/Menu";
import Course from "./components/Course";
import Project from "./components/Project";
import Payment from "./components/Payment";
import Coin from "./components/Coin";
import Info from "./components/Info";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";

export default function Profile() {
  let { path, url } = useRouteMatch();
  // console.log(path);
  let login = true;

  if (!login) return <Redirect to="/" />;

  return (
    <main className="profile" id="main">
      <section>
        <div className="top-info">
          <div className="avatar">
            {/* <span class="text">H</span> */}
            <img src="/img/avatar-lg.png" alt="" />
            <div className="camera" />
          </div>
          <div className="name">trần nghĩa</div>
          <p className="des">Thành viên của team CFD1-OFFLINE</p>
        </div>
        <div className="container">
          <div className="tab">
            <Menu />
            <div className="tab-content">
              <Switch>
                <Route path={`${path}/khoa-hoc`} exact component={Course} />
                <Route path={`${path}/du-an`} exact component={Project} />
                <Route
                  path={`${path}/lich-su-thanh-toan`}
                  exact
                  component={Payment}
                />
                <Route path={`${path}/coin`} exact component={Coin} />
                <Route path="*" component={Info} />
              </Switch>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
