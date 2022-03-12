import { useRouter } from "next/router";


function PropertyPage() {
    const router = useRouter();
    const { params } = router.query;
    if (!params) return null;
    console.log(router);
    return (
        <div>
            {params[0] && <h1>city : {params[0]}</h1>}
            {params[1] && <h1>property : {params[1]}</h1>}
        </div>
    )
}

export default PropertyPage