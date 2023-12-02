import { useRouter } from "next/router";

// 関数名は関係ない
export default function bbbb() {
    const router = useRouter();
    return (
        <>
            <h1>aaaa</h1>
            <hr />
            { router.query.name }
        </>
    );
}