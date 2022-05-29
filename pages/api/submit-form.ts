export default function handler(req : any,res : any){
    const body = req.body;

    console.log(body)


    res.status(200).json({data: `${body.name}`})
}