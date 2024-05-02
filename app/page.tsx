"use client"

import {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useRouter} from "next/navigation";

const matchingDates = Array.from({length: 14}, (_, i) => `${String(i + 1).padStart(2, '0')}/07/2023`);
const filterDates = (date: Date) => {

    return matchingDates.includes(date.toLocaleString("en-GB").split(",")[0]);
};
export default function Home() {
    const router = useRouter()
    const [selectedDate, setSelectedDate] = useState(new Date("07/01/2023"));


    return (
        <div>
            <h4>Выберите дату</h4>
            <form onSubmit={(event) => {
                event.preventDefault()
                router.push(`/report/${encodeURIComponent(selectedDate.toLocaleString("en-GB").split(",")[0])}`)
            }}>
                <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date!)}
                    filterDate={filterDates}
                    className={"data_picker"}

                />
                <br/>
                <button type={"submit"} className={"submit-btn"}>
                    Просмотреть отчёт
                </button>
            </form>
        </div>
    )
        ;
}
