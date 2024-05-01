import {
    PLAY_SONG_REQUEST,
    PAUSE_SONG_REQUEST,
    PLAY_MASTER,
    PAUSE_MASTER,
} from "../Contants/SongConstant";

export const playSong = (song) => async (dispatch) => {
    dispatch({ type: PLAY_SONG_REQUEST, payload: song });
};
export const pauseSong = () => async (dispatch) => {
    dispatch({ type: PAUSE_SONG_REQUEST });
};
export const pauseMaster = () => async (dispatch) => {
    dispatch({ type: PAUSE_MASTER });
};
export const playMaster = () => async (dispatch) => {
    dispatch({ type: PLAY_MASTER });
};
export const searchSongs = (value) => async (dispatch) => {
    
    dispatch({ type: PLAY_MASTER });
};
