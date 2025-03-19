import { getURL } from '@/utils/helpers';
import { PersonalSchemaType } from '@/lib/form/schema';


export async function setAnswers(req: PersonalSchemaType) {
    const response = await fetch(getURL('/api/answer'),
        {
            method: "POST",
            body: JSON.stringify(req)
        }
    );

    if (response?.status == 200) {
        const { data } = await response.json();
        console.log(data);
        return data;
    }

    return null;
}