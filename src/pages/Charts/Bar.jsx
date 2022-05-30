import React from "react";
import {
    ChartComponent,
    SeriesCollectionDirective,
    SeriesDirective,
    Inject,
    DateTime,
    Legend,
    ColumnSeries,
    DataLabel,
    Tooltip, Category
} from "@syncfusion/ej2-react-charts";

import {barCustomSeries, barPrimaryYAxis, barPrimaryXAxis} from "../../data/dummy";
import {useStateContext} from "../../contexts/ContextProvider";

import {Header} from "../../components";

const Bar = () => {
    const {currentMode} = useStateContext();
    return (
        <div>
            <Header category="Bar" title="Medals per country"/>
            <ChartComponent id="bar-chart" height="420px" primaryXAxis={barPrimaryXAxis} primaryYAxis={barPrimaryYAxis} chartArea={{border:{width: 0}}} tooltip={{enable:true}} background={currentMode === "Dark" ? "#33373E" : "#fff"}>
                <Inject services={[ColumnSeries, Tooltip, Category, DataLabel, Legend]}/>
                <SeriesCollectionDirective>
                    {barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item}/>)}
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>
    )
}

export default Bar;