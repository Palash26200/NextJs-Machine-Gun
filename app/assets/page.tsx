import Layout from "@/components/Layout";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import assets from "@/data/assets";

export default function Assets(){
    return (
        <Layout>
            <>
                <DataTable columns={columns} data={assets}/>
            </>
        </Layout>
    )
}