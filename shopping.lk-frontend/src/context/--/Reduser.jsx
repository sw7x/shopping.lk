import React from "react";
import { contextApiActions } from "../_redux/_constants";

const Reducer = (state, action) => {
    switch (action.type) {
        case "PW_VISIBILITY_TOGGLE":
            return {
                ...state,
                ui_pw_input_visibility: action.payload,
            };
        case "LOGIN_ALT_LINK_DRAWER_TOGGLE":
            return {
                ...state,
                ui_login_alt_link_drawer: action.payload,
            };
        case "UI_TOGGLE_SWITCH":
            return {
                ...state,
                ui_toggle_switch: action.payload,
            };
        case "UI_RADIO_BTN_CHECKED":
            return {
                ...state,
                ui_radio_btn_checked: action.payload,
            };
        case contextApiActions.UI_CONFIRMATION_TOGGEL:
            return {
                ...state,
                ui_confirmation_details: {
                    ...state.ui_confirmation_details,
                    ...action.payload,
                },
            };

        case contextApiActions.UI_RIGHT_SIDE_PANEL_TOGGEL:
            return {
                ...state,
                ui_right_sidepanel_modal_show: action.payload,
            };
        default:
            return state;
    }
};

export default Reducer;
