"use client"
import {MongoClient, ServerApiVersion} from "mongodb";
import {Suspense, useEffect, useState} from "react";
import {number} from "prop-types";
import Loading from "@/components/Loading";


import Report from "@/app/report/[date]/Report";
export default function ({params}: { params: { date: string } }) {
    let date = decodeURIComponent(params.date);
    let [isLoading, setIsLoading] = useState(true);
    let [report, setReport] = useState(null);
    useEffect(() => {
        if (isLoading) {
            fetch("/api/report", {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({date: date})
            }).then(res => res.json()).then(res => {
                setReport(res)
                setIsLoading(false)
            });
        }
    })


    return (
        <div>
            {date}
            <br/>
            {isLoading && <Loading isLoading={isLoading}/>}
            {!isLoading && <Report report={report}/>}

        </div>
    )
}