import {Accordion, AccordionItem} from "@nextui-org/accordion";
import Entity from "@/app/report/[date]/Entity";
// import { ObjectView } from 'react-object-view'
export default ({report}: { report: any }) => {
    report[0].data.forEach((item: any) => {
        JSON.stringify(item['processed_entity'])
    })
    return (
        <div>
            <Accordion>
                <AccordionItem aria-label="Accordion 1" title="Верные" className={"text-green-700"}>
                    {!(report[0].data.length) && ("Записей Не Найдено")}
                    <Accordion>
                        {report[0].data.map((doc: any) => (
                            <AccordionItem title={"Id: " + doc.orig.id}>
                                <Entity doc={doc.processed_entity}/>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </AccordionItem>
                <AccordionItem aria-label="Accordion 2" title="Ощибочные" className={"text-red-700"}>
                    Записей Не Найдено
                </AccordionItem>
                <AccordionItem aria-label="Accordion 3" title="Имеющие несколько связей" className={"text-red-700"}>
                    {!(report[2].data.length) && ("Записей Не Найдено")}
                    {(
                        <Accordion>
                            {report[2].data.map((doc: any) => (
                                <AccordionItem title={"Id: " + doc.processed_entity.id}>
                                    <Entity doc={doc.processed_entity}/>

                                    <Accordion>
                                        <AccordionItem title={"Совпадающие"} className={"font-bold"}>
                                            <Accordion>
                                                {doc.orig.map((orig_doc: any) => (
                                                    <AccordionItem title={"Id: " + orig_doc.id} className={"font-normal"}>
                                                        <Entity doc={orig_doc}/>
                                                    </AccordionItem>
                                                ))}
                                            </Accordion>
                                        </AccordionItem>
                                    </Accordion>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    )}
                </AccordionItem>
                <AccordionItem aria-label="Accordion 3" title="Несовпадшие (не имеют связей) XLSX"
                               className={"text-red-700"}>
                    {!(report[3].data.length) && ("Записей Не Найдено")}
                    {(report[3].data.length) && (
                        <Accordion>
                            {report[4].data.map((doc: any) => (
                                <AccordionItem title={doc.id}>
                                    <Entity doc={doc}/>
                                </AccordionItem>
                            ))}
                        </Accordion>)}
                </AccordionItem>
                <AccordionItem aria-label="Accordion 3" title="Несовпадшие (не имеют связей) JsonApi"
                               className={"text-red-700"}>
                    {!(report[4].data.length) && ("Записей Не Найдено")}
                    {(report[4].data.length) && (
                        <Accordion>
                            {report[4].data.map((doc: any) => (
                                <AccordionItem title={doc.id}>
                                    <Entity doc={doc}/>
                                </AccordionItem>
                            ))}
                        </Accordion>)}
                </AccordionItem>
            </Accordion>
        </div>
    )
}