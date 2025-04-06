export async function GET(req,{params}){

    console.log(params)
    const{id} = (await params)
    return  new Response(` user id is ${id}`)
}