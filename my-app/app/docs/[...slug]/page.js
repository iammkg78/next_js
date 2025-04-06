export default async function slug({params}){
    const{slug} = await params

    return <div>
        {slug.map((slug)=><li key={slug}>{slug}</li>)}
    </div>

}