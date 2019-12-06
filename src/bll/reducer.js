const initialState = {
    max: 5,
    start: 0,
    count: 0,
    settingsApplied: false
};


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT_COUNT':
            return state.count < state.max
                ? {...state, count: Number(state.count) + 1}
                : state;

        case 'DECREMENT_COUNT':
            return {...state, count: Number(state.count) - 1};
        case 'RESET_COUNT':
            return {...state, count: state.start};
        case 'APPLY_SETTINGS':
            return {...state, settingsApplied: action.status, count: state.start};
        case 'SET_MAX_VALUE':
            return {...state, max: Number(action.newMaxValue), settingsApplied: false};
        case 'SET_START_VALUE':
            return {
                ...state,
                start: Number(action.newStartValue),
                count: Number(action.newStartValue),
                settingsApplied: false
            };
        default:
            return state;
    }
};

export const incrementCountAC = () => ({
    type: 'INCREMENT_COUNT'
});

export const decrementCountAC = () => ({
    type: 'DECREMENT_COUNT'
});

export const resetCountAC = () => ({
    type: 'RESET_COUNT'
});

export const setMaxValueAC = (newMaxValue) => ({
    type: 'SET_MAX_VALUE',
    newMaxValue: newMaxValue
});

export const setStartValueAC = (newStartValue) => ({
    type: 'SET_START_VALUE',
    newStartValue: newStartValue
});

export const setAppliedSettings = (status) => (
    {
        type: 'APPLY_SETTINGS',
        status
    });



