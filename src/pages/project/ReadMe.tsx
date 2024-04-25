import axios from "axios";
import { LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ReadMe({ readmeMeLink }: { readmeMeLink: string }) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get(readmeMeLink)
            .then((res) => {
                setData(res.data);
            })
            .finally(() => setLoading(false));
    }, []);

    return loading ? (
        <LoaderCircle className="mx-auto mt-16 animate-spin" />
    ) : (
        <Markdown remarkPlugins={[remarkGfm]}>{data}</Markdown>
    );
}
