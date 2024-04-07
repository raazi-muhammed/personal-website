import axios from "axios";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ReadMe({ readmeMeLink }: { readmeMeLink: string }) {
    const [data, setData] = useState();

    useEffect(() => {
        axios.get(readmeMeLink).then((res) => {
            setData(res.data);
        });
    });

    return <Markdown remarkPlugins={[remarkGfm]}>{data}</Markdown>;
}
