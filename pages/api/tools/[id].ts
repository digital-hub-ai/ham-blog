import { getToolById } from &apos;@/lib/tools&apos;;
import { NextApiRequest, NextApiResponse } from &apos;next&apos;;

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== &apos;GET&apos;) {
        return res.status(405).json({ error: &apos;Method not allowed&apos; });
    }

    try {
        const { id } = req.query;
        const tool = await getToolById(id as string);

        if (!tool) {
            return res.status(404).json({ error: &apos;Tool not found&apos; });
        }

        return res.status(200).json(tool);
    } catch (error) {
        console.error(&apos;Error fetching tool:&apos;, error);
        return res.status(500).json({ error: &apos;Failed to fetch tool&apos; });
    }
}
