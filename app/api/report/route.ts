import {NextRequest, NextResponse} from "next/server";
import {MongoClient, ServerApiVersion} from "mongodb";

const handler = async (req: NextRequest) => {
    try {
        let date: string = (await req.json()).date.replaceAll("/", ".")
        const client = new MongoClient(process.env.MONGO_URI!);
        // const client = new MongoClient('mongodb://localhost:27017');
        await client.connect()
        const database = client.db("Reports");

        let collection = database.collection(date + '-report')
        let cursor = collection.find();
        let res = []

        for await (const doc of cursor) {
            res.push(doc);
        }
        return new Response(JSON.stringify(res));
    }
    catch (error) {
        return new Response(JSON.stringify(error));
    }
}

export {handler as GET, handler as POST}