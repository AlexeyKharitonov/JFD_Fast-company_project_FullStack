import { createSlice } from "@reduxjs/toolkit";
import professionService from "../services/profession.service";

const professionsSlice = createSlice({
    name: "professions",
    initialState: {
        entities: [],
        isLoading: true,
        errors: null,
        lastFetch: null
    },
    reducers: {
        professionRequested: (state) => {
            state.isLoading = true;
        },
        professionsRecived: (state, action) => {
            state.entities = action.payload;
            state.lastFetch = Date.now();
            state.isLoading = false;
        },
        professionsRequestFailed: (state, action) => {
            state.errors = action.payload;
            state.isLoading = false;
        }
    }
});

const { reducer: professionsReducer, actions } = professionsSlice;
const { professionRequested, professionsRecived, professionsRequestFailed } =
    actions;

function isOutdated(date) {
    if (Date.now() - date > 10 * 60 * 1000) {
        return true;
    }
    return false;
}

export const loadProfessionsList = () => async (dispatch, getState) => {
    const { lastFetch } = getState().professions;
    if (isOutdated(lastFetch)) {
        dispatch(professionRequested());
        try {
            const { content } = await professionService.fetchAll();
            dispatch(professionsRecived(content));
        } catch (error) {
            dispatch(professionsRequestFailed(error.message));
        }
    }
};

export const getProfessions = () => (state) => state.professions.entities;
export const getPeofessionsLoadingStatus = () => (state) =>
    state.professions.isLoading;

export const getProfessionsByIds = (professionId) => (state) => {
    const profs = state.professions.entities;
    if (profs.length) {
        return profs.find((obj) => obj._id === professionId);
    }
};

export default professionsReducer;
