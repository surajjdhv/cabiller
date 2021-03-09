// import { getCurrentInstance } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
// const app = getCurrentInstance();
// const sqlite = app?.appContext.config.globalProperties.$sqlite;

export const echoDB = async (sqlite) => {
    try {
        let res = await sqlite.echo('Hello');
        
        if (res.value != 'Hello') {
            return false;
        }

        return true;
    } catch (e) {
        return false;
    }
};

export const checkExistingConnection = async (sqlite) => {
    try {
        const db = await sqlite.retrieveConnection('cabiller');
        store.dispatch('setExisitingConnection', db);
        return true;
    } catch (e) {
        return false;
    }
}

export const createDB = async (sqlite) => {
    const createTblStmt = `
        CREATE TABLE IF DOES NOT EXISTS customers (
            id INTEGER PRIMARY KEY NOT NULL,
            mobile VARCHAR(13) NOT NULL
        );
    `;

    const db = await sqlite.createConnection('cabiller');

    await db.open();

    let ret = db.execute(createTblStmt);

    return ret;
};

// export default {
//     echoDB,
//     checkExistingConnection,
//     createDB
// };