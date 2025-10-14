

export async function GET(req) {

    const url = new URL(req.url);

    const id = url.searchParams.get('_id');

    console.log(id)
}