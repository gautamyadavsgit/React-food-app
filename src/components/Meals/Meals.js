import { Fragment } from "react";
import MealsSummary from "./MeaslSummary";
import AvailableMeals from "./AvailaibleMeals";
const Meals = () => {
return (
    <Fragment>
        <MealsSummary/>
        <AvailableMeals/>
    </Fragment>
);

}
export default Meals;