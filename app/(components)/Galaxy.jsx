"use client"
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import Planets from "@/app/(components)/(Galaxy)/Planets";
import Orbits from "@/app/(components)/(Galaxy)/Orbits";
import GuideModal from "@/app/(components)/GuideModal";

const Galaxy = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="relative flex w-full ">
                <div className="flex flex-col gap-4 mx-10 items-center justify-center">
                    <Planets />
                </div>
                <div className="relative w-full h-screen flex justify-center items-center">
                    <Orbits />
                </div>
            </div>
        </DndProvider>
    );
};

export default Galaxy;
