import Link from "next/link";
export default function notification(){
    return (
        <div style={{height:100,border:"1px solid black"}}>
            <h2>notification</h2>
            <Link href={"./admin/settings"}>Admin settings page</Link>
        </div>
    )
}