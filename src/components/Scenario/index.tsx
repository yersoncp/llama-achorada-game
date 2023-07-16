import { ReactNode } from "react";
import s from "./Scenario.module.css";

type ScenarioProps = {
  children: ReactNode;
}

const Scenario = ({ children }: ScenarioProps) => {
  return <>
    <div className={s.container}>
      {children}
    </div>
  </>
}

export default Scenario;
