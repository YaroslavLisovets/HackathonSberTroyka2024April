import {Accordion, AccordionItem} from "@nextui-org/accordion";

export default function ({doc}: { doc: any }) {
    // console.log(doc);
    // console.log("penis");
    return (
        <div>
            Status {doc.status.toString()}
            <br/>
            Dock_id {doc.dock_id}
            <br/>
            Ship_id {doc.ship_id}
            <br/>
            Route_id {doc.route_id}
            <br/>
            Lot_id {doc.lot_id}
            <br/>
            Trip_id {doc.trip_id}
            <br/>
            <Accordion>
                <AccordionItem aria-label="Accordion 1" title="Position">
                    Board {doc.position.board}
                    <br/>
                    Number {doc.position.number}
                    <br/>
                    Berth_letter {doc.position.berth_letter}
                </AccordionItem>
            </Accordion>
            Shipowner Id {doc.shipowner_id}

            <Accordion>
                <AccordionItem aria-label="Accordion 1" title="Time Table">
                    Start Date {doc.timetable.start_date}
                    <br/>
                    End Date {doc.timetable.end_date}
                    <br/>
                    Start Time {doc.timetable.start_time}
                    <br/>
                    End Time {doc.timetable.end_time}
                    <br/>
                    duration {doc.timetable.duration}
                </AccordionItem>
            </Accordion>
            Cancel Schedule Id {doc.cancel_schedule_id}
            <br/>
            Winner Ship Id {doc.winner_ship_id}
        </div>
    )
}