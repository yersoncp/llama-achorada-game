import { ReactNode } from "react";
import s from "./Scenario.module.css";

type ScenarioProps = {
  children: ReactNode;
}

const Scenario = ({ children }: ScenarioProps) => {
  return <>
    <div className={s.container}>
      <div className={s.clouds}></div>
      {children}
    </div>
  </>
}

export default Scenario;
