import { JSONFilePreset } from 'lowdb/node'

const startFunc = async ({ inPk, inTablePath }) => {
    const db = await JSONFilePreset(inTablePath, []);

    await db.read();

    const pkToDelete = inPk;

    db.data = db.data.filter(item => item.pk !== parseInt(pkToDelete));

    await db.write();

    return await true;
};

export { startFunc };
