import React from "react";
import { ColumnsDirective, ColumnDirective, KanbanComponent} from "@syncfusion/ej2-react-kanban";

import {kanbanData, kanbanGrid, scheduleData} from "../data/dummy";

import {Header} from "../components";
import {
    Agenda,
    Day, DragAndDrop,
    Inject, Month, Resize,
    ScheduleComponent,
    ViewDirective,
    ViewsDirective,
    Week,
    WorkWeek
} from "@syncfusion/ej2-react-schedule";
import {DatePickerComponent} from "@syncfusion/ej2-react-calendars";

const Kanban = () =>{
    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="App" title="Kanban" />
            <KanbanComponent
                id="kanban"
                dataSource={kanbanData}
                cardSettings={{contentField:'Summary', headerField:'Id'}}
                keyField="Status"
            >
                <ColumnsDirective>
                    {kanbanGrid.map((item, index) => <ColumnDirective key={index} {...item}/>)}
                </ColumnsDirective>
            </KanbanComponent>


        </div>
    )
};

export default Kanban;