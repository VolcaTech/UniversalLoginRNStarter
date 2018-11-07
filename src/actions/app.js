export const actions = {
    CHANGE_ROOT: 'CHANGE_ROOT',
};


export function changeAppRoot(root) {
    return {
        type: actions.CHANGE_ROOT,
        payload: {
            root
        }
    };
}
